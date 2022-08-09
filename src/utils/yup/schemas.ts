import * as yup from 'yup'
import { IPaymentInfo } from '../../context/CoffeeContext'

export const paymentInfoSchema: yup.SchemaOf<IPaymentInfo> = yup
  .object()
  .shape({
    street: yup.string().required(),
    number: yup.number().required().positive().integer(),
    complement: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.number().required().positive().integer(),
    paymentType: yup
      .mixed()
      .oneOf(['credit-card', 'debit-card', 'money'])
      .required(),
  })
