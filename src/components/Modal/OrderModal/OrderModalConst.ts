interface OrderForm {
  [key: string]: string;
}

interface IValidation {
  required: boolean;
  pattern: RegExp;
  message: string;
  maxLength: number;
}

export const orderModal: OrderForm = {
  PLACEHOLDER_NAME: "Name",
  PLACEHOLDER_PHONE: "Phone number",
  PLACEHOLDER_ADDRESS: "Delivery address",
  PLACEHOLDER_EMAIL: "E-mail",
  PLACEHOLDER_CARD_NUMBER: "Card number",
  PLACEHOLDER_CARD_NAME: "Cardholder Name",
  PLACEHOLDER_CARD_DATE: "Date",
  PLACEHOLDER_CARD_CVV: "CVV",
};

export const validationName: IValidation = {
  required: true,
  pattern: /^[a-z]{3,}( [a-z]{3,})$/gim,
  maxLength: 100,
  message:
    "The name must contain at least two words, each at least 3 characters long",
};

export const validationPhone: IValidation = {
  required: true,
  maxLength: 15,
  pattern: /^\+\d{9,15}$/,
  message:
    "The number must start with '+', contain only numbers and be no shorter than 9 characters",
};

export const validationAddress: IValidation = {
  required: true,
  maxLength: 150,
  pattern:
    /^([a-zA-Z.,/]{5,})[ ]([a-zA-Z.,/]{5,})[ ]([a-zA-Z.,/]{5,})(([a-zA-Z.,/]{0,}){0,})/gm,
  message:
    "The adress must contain at least three words, each at least 5 characters long",
};

export const validationEmail: IValidation = {
  required: true,
  maxLength: 15,
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
};

export const validationCardNumber: IValidation = {
  required: true,
  maxLength: 16,
  pattern: /^\d{16}$/,
  message: "The number must contain only 16 numbers",
};

export const validationCardDate: IValidation = {
  required: true,
  maxLength: 16,
  pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
  message:
    "It's allowed to enter only digits, the month cannot be more than 12",
};

export const validationCardCVV: IValidation = {
  required: true,
  maxLength: 3,
  pattern: /^\d{3}$/,
  message: "The length must be 3 characters, only digits are allowed",
};

export enum PayType {
  MasterCard = "MasterCard",
  Visa = "Visa",
  Maestro = "Maestro",
}
