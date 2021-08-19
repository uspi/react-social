import { Field, Form, Formik } from 'formik'
import React from 'react'
import { FilterType } from '../../redux/users-reducer'

const usersSearchFormValidate = (values: any) => {
  // const errors = {}
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address'
  // }
  // return errors
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  let submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend:
        values.friend === 'null'
          ? null
          : values.friend === 'true'
          ? true
          : false,
    }

    props.onFilterChanged(filter)
    setSubmitting(false)

    alert(JSON.stringify(filter, null, 2))
    setSubmitting(false)
  }
  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: 'null' }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only Followed</option>
              <option value="false">Only Unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
})

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}
