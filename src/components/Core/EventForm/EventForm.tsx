import * as React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import isValidDate from 'date-fns/isValid'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { $enum } from 'ts-enum-util'
import { Formik } from 'formik'
import { format } from '@/utils/date'
import { i18nKeys } from '@/i18n/i18nKeys'
import * as Styled from './EventFormStyled'
import { EnumEventType, IPureModelEvent } from '@/api/event/model'
import { eventTypeKeys } from '@/i18n/i18nKeys'
import { createEvent } from '@/api/event'

const validationSchema = Yup.object().shape({
  title: Yup.string().min(3).max(20).required(),
  date: Yup.date().required(),
  description: Yup.string().min(3).max(50).required(),
  image: Yup.string().required(),
  type: Yup.string().required(),
  phone: Yup.number().required(),
  email: Yup.string().required(),
  place: Yup.string().required(),
})

const readFileAsDataURL = (event: React.ChangeEvent<HTMLInputElement>): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const file = event.target.files && event.target.files[0]

    if (!file) return reject('')
  
    const fr = new FileReader()
    fr.onload = () => {
      resolve(fr.result)
    }

    fr.onerror = () => {
      reject('')
    }
  
    fr.readAsDataURL(file)
  })
}

interface IPropsState {
  initialValues: IPureModelEvent
}

export const EventForm = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const [state] = React.useState<IPropsState>({
    initialValues: {
      title: '',
      date: new Date(),
      description: '',
      image: '',
      type: EnumEventType.CULTURE,
      phone: '',
      email: '',
      place: ''
    }
  })

  const translate = React.useMemo(() => {
    return {
      title: t(i18nKeys.EventFormLabelTitle),
      date: t(i18nKeys.EventFormLabelDate),
      description: t(i18nKeys.EventFormLabelDescription),
      image: t(i18nKeys.EventFormLabelImage),
      type: t(i18nKeys.EventFormLabelEventType),
      phone: t(i18nKeys.EventFormLabelPhone),
      email: t(i18nKeys.EventFormLabelEmail),
      place: t(i18nKeys.EventFormLabelPlace),
    }
  }, [/* deps for dynamic locale*/])

  const onChangeUploadFile = React.useCallback((setFieldValue: (type: 'image', payload: any) => void) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('image', await readFileAsDataURL(event))
  }, [])

  const onChangeDate = React.useCallback((handleChange) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value)

    if (!isValidDate(date)) {
      return
    }

    handleChange(event)
  }, [])

  return (
    <Styled.EventForm>
      <Styled.EventFormTitle>{t(i18nKeys.EventFormTitle)}</Styled.EventFormTitle>
      <Formik
        initialValues={state.initialValues}
        onSubmit={(async (event, { setSubmitting }) => {
          dispatch(createEvent({
            event
          }))

          setSubmitting(false)
          history.push('/')
        })}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue
          } = props

          return (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Styled.EventFormActions>
                  <Button variant="contained" color="primary" onClick={handleReset}>
                    {t(i18nKeys.EventFormActionsButtonReset)}
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    {t(i18nKeys.EventFormActionsButtonCreate)}
                  </Button>
                </Styled.EventFormActions>
                <FormGroup>
                  <Styled.EventFormDialog>
                    <Styled.EventFormControlLabel
                      control={<TextField
                        autoFocus
                        error={!!(errors.title && touched.title)}
                        name="title"
                        id="title"
                        label={translate.title}
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />}
                      label={translate.title}
                    />
                    <Styled.EventFormControlLabel
                      control={<TextField
                        error={!!(errors.date && touched.date)}
                        name="date"
                        id="date"
                        label={translate.date}
                        type="datetime-local"
                        required
                        value={format(new Date(values.date), 'yyyy-MM-dd') + 'T' + format(new Date(values.date), 'HH:mm')}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={onChangeDate(handleChange)}
                        onBlur={handleBlur}
                      />}
                      label={translate.date}
                    />
                    <Styled.EventFormControlLabel
                      control={<TextField
                        error={!!(errors.description && touched.description)}
                        name="description"
                        id="description"
                        label={translate.description}
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />}
                      label={translate.description}
                    />
                    <Styled.EventFormControlLabel
                      control={<Select
                        error={!!(errors.type && touched.type)}
                        name="type"
                        id="type"
                        value={values.type}
                        onChange={handleChange}
                      >
                        {$enum(EnumEventType).map((eventType) => {
                          return (
                            <MenuItem value={eventType} key={eventType}>
                              {t(eventTypeKeys[eventType])}
                            </MenuItem>
                          )
                        })}
                      </Select>}
                      label={translate.type}
                    />
                    <Styled.EventFormControlLabel
                      control={<TextField
                        error={!!(errors.phone && touched.phone)}
                        name="phone"
                        id="phone"
                        label={translate.phone}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />}
                      label={translate.phone}
                    />
                    <Styled.EventFormControlLabel
                      control={<TextField
                        error={!!(errors.email && touched.email)}
                        name="email"
                        id="email"
                        label={translate.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />}
                      label={translate.email}
                    />
                    <Styled.EventFormControlLabel
                      control={<TextField
                        error={!!(errors.place && touched.place)}
                        name="place"
                        id="place"
                        label={translate.place}
                        value={values.place}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />}
                      label={translate.place}
                    />
                    <Styled.EventFormControlLabel
                      control={<Button variant="contained" component="label" style={{ background: !!(errors.image && touched.image) ? 'red': 'transparent' }}>
                      {t(i18nKeys.EventFormLabelImage)}
                      <input
                        type="file"
                        onChange={onChangeUploadFile(setFieldValue)}
                        style={{ display: "none" }}
                      />
                      </Button>}
                      label={translate.image}
                    />
                  </Styled.EventFormDialog>
                </FormGroup>
              </FormControl>
            </form>
          )
        }}
      </Formik>
    </Styled.EventForm>
  )
}