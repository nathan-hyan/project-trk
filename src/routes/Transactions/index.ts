import express, { Request, Response } from 'express';

const PACKS = [
  {
    id: 'adb03e7e-900f-4a47-8cb4-d9079d2ae83e',
    tokenPago: '2d8575be-e297-4ec7-9dff-8fef8f04eab4',
    idPago: '10254443',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 20:30:09.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4855", "address_validation_code": "VTE0011", "card_authorization_code": "173009"}',
    respuestaTransaccion:
      '{"id": 10254443, "bin": "450799", "pan": null, "date": "2021-02-19T17:30Z", "token": "2d8575be-e297-4ec7-9dff-8fef8f04eab4", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4855", "address_validation_code": "VTE0011", "card_authorization_code": "173009"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "adb03e7e-900f-4a47-8cb4-d9079d2ae83e", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: 'eb233409-42bd-4320-99a9-7caaa51ac41c',
    tokenPago: '7ee0587a-7896-4c44-adad-7faec36a5180',
    idPago: '10254437',
    valorTotal: 1258.0,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 20:24:42.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4853", "address_validation_code": "VTE0011", "card_authorization_code": "172443"}',
    respuestaTransaccion:
      '{"id": 10254437, "bin": "450799", "pan": null, "date": "2021-02-19T17:24Z", "token": "7ee0587a-7896-4c44-adad-7faec36a5180", "amount": 125800, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4853", "address_validation_code": "VTE0011", "card_authorization_code": "172443"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "eb233409-42bd-4320-99a9-7caaa51ac41c", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 3,
  },
  {
    id: 'cc41592b-da82-4314-b8da-4dd32c1c594a',
    tokenPago: 'd9ad5b2a-5af5-4e0e-aa30-c24590df8462',
    idPago: '10254431',
    valorTotal: 999.0,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 20:20:32.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4851", "address_validation_code": "VTE0011", "card_authorization_code": "172032"}',
    respuestaTransaccion:
      '{"id": 10254431, "bin": "450799", "pan": null, "date": "2021-02-19T17:20Z", "token": "d9ad5b2a-5af5-4e0e-aa30-c24590df8462", "amount": 99900, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4851", "address_validation_code": "VTE0011", "card_authorization_code": "172032"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "cc41592b-da82-4314-b8da-4dd32c1c594a", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 2,
  },
  {
    id: '4510d34a-2496-4d39-8668-413393dd8873',
    tokenPago: 'f76767ef-0bf8-4d12-89c5-7d3ec1de9435',
    idPago: '10254429',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 20:17:17.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4850", "address_validation_code": "VTE0011", "card_authorization_code": "171718"}',
    respuestaTransaccion:
      '{"id": 10254429, "bin": "450799", "pan": null, "date": "2021-02-19T17:17Z", "token": "f76767ef-0bf8-4d12-89c5-7d3ec1de9435", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4850", "address_validation_code": "VTE0011", "card_authorization_code": "171718"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "4510d34a-2496-4d39-8668-413393dd8873", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: '22d53d5b-b717-4a74-8200-b74839f301c4',
    tokenPago: '41dd3fc8-c123-4312-813b-848965ecb373',
    idPago: '10254321',
    valorTotal: 3999.98,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 19:09:20.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4842", "address_validation_code": "VTE0011", "card_authorization_code": "160920"}',
    respuestaTransaccion:
      '{"id": 10254321, "bin": "450799", "pan": null, "date": "2021-02-19T16:09Z", "token": "41dd3fc8-c123-4312-813b-848965ecb373", "amount": 399998, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4842", "address_validation_code": "VTE0011", "card_authorization_code": "160920"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "22d53d5b-b717-4a74-8200-b74839f301c4", "first_installment_expiration_date": null}',
    packsComprados: 2,
    idPack: 1,
  },
  {
    id: 'a598bd9a-8bf0-4d09-9428-56176d8e564f',
    tokenPago: '2daa2ea2-3780-4d5c-b474-401c44ec49b8',
    idPago: '10254226',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 18:19:52.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4837", "address_validation_code": "VTE0011", "card_authorization_code": "151953"}',
    respuestaTransaccion:
      '{"id": 10254226, "bin": "450799", "pan": null, "date": "2021-02-19T15:19Z", "token": "2daa2ea2-3780-4d5c-b474-401c44ec49b8", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4837", "address_validation_code": "VTE0011", "card_authorization_code": "151953"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "a598bd9a-8bf0-4d09-9428-56176d8e564f", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: '893472aa-a227-4f17-b5da-1a34b66d1761',
    tokenPago: '7cfe759d-db2a-41dc-8452-bcecca244d11',
    idPago: '10254215',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '49044905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 18:17:49.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4836", "address_validation_code": "VTE0011", "card_authorization_code": "151749"}',
    respuestaTransaccion:
      '{"id": 10254215, "bin": "450799", "pan": null, "date": "2021-02-19T15:17Z", "token": "7cfe759d-db2a-41dc-8452-bcecca244d11", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4836", "address_validation_code": "VTE0011", "card_authorization_code": "151749"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "893472aa-a227-4f17-b5da-1a34b66d1761", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: 'af26d00f-16de-4fa6-b585-996089c9bc3c',
    tokenPago: '26e4ba1b-aa8a-4554-8737-5bd16e30869e',
    idPago: '10254105',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 17:48:09.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4827", "address_validation_code": "VTE0011", "card_authorization_code": "144809"}',
    respuestaTransaccion:
      '{"id": 10254105, "bin": "450799", "pan": null, "date": "2021-02-19T14:48Z", "token": "26e4ba1b-aa8a-4554-8737-5bd16e30869e", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4827", "address_validation_code": "VTE0011", "card_authorization_code": "144809"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "af26d00f-16de-4fa6-b585-996089c9bc3c", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: '6c783ace-ee6a-48f4-b992-1cdf6c631174',
    tokenPago: '1491affb-1df3-498f-a80a-17a99d795c29',
    idPago: '10254027',
    valorTotal: 999.0,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1000309844',
    unidadFacturacion: null,
    fechaPago: '2021-02-19 17:03:54.0',
    nombreTitular: 'WEYERSTALL VIVIANA ALICIA',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4823", "address_validation_code": "VTE0011", "card_authorization_code": "140354"}',
    respuestaTransaccion:
      '{"id": 10254027, "bin": "450799", "pan": null, "date": "2021-02-19T14:03Z", "token": "1491affb-1df3-498f-a80a-17a99d795c29", "amount": 99900, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1000309844", "email": "viviana.alicia.on@outlook.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4823", "address_validation_code": "VTE0011", "card_authorization_code": "140354"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "6c783ace-ee6a-48f4-b992-1cdf6c631174", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 2,
  },
  {
    id: 'c01530d3-56f7-4556-b0ac-72d3830c2807',
    tokenPago: '6e8ea536-1dc3-4fd7-8548-cc88061e9396',
    idPago: '10249248',
    valorTotal: 1999.99,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1000309844',
    unidadFacturacion: null,
    fechaPago: '2021-02-18 19:00:03.0',
    nombreTitular: 'WEYERSTALL VIVIANA ALICIA',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4796", "address_validation_code": "VTE0011", "card_authorization_code": "160003"}',
    respuestaTransaccion:
      '{"id": 10249248, "bin": "450799", "pan": null, "date": "2021-02-18T16:00Z", "token": "6e8ea536-1dc3-4fd7-8548-cc88061e9396", "amount": 199999, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1000309844", "email": "viviana.alicia.on@outlook.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4796", "address_validation_code": "VTE0011", "card_authorization_code": "160003"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "c01530d3-56f7-4556-b0ac-72d3830c2807", "first_installment_expiration_date": null}',
    packsComprados: 1,
    idPack: 1,
  },
  {
    id: 'ab9e41ee-ebd4-4dba-b51a-ec429ce7dac1',
    tokenPago: '34d4d795-35ec-4017-b43c-927b16f22024',
    idPago: '10249071',
    valorTotal: 3999.98,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1000309844',
    unidadFacturacion: null,
    fechaPago: '2021-02-18 15:52:24.0',
    nombreTitular: 'WEYERSTALL VIVIANA ALICIA',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4788", "address_validation_code": "VTE0011", "card_authorization_code": "125225"}',
    respuestaTransaccion:
      '{"id": 10249071, "bin": "450799", "pan": null, "date": "2021-02-18T12:52Z", "token": "34d4d795-35ec-4017-b43c-927b16f22024", "amount": 399998, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1000309844", "email": "viviana.alicia.on@outlook.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4788", "address_validation_code": "VTE0011", "card_authorization_code": "125225"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "ab9e41ee-ebd4-4dba-b51a-ec429ce7dac1", "first_installment_expiration_date": null}',
    packsComprados: 2,
    idPack: 1,
  },
  {
    id: 'c935ddb3-610e-4394-acae-79f44c0f7ff6',
    tokenPago: 'f672fb11-c1c9-4abd-be50-ea3542fbdf30',
    idPago: '10249057',
    valorTotal: 3999.98,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-18 15:41:31.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4786", "address_validation_code": "VTE0011", "card_authorization_code": "124131"}',
    respuestaTransaccion:
      '{"id": 10249057, "bin": "450799", "pan": null, "date": "2021-02-18T12:41Z", "token": "f672fb11-c1c9-4abd-be50-ea3542fbdf30", "amount": 399998, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4786", "address_validation_code": "VTE0011", "card_authorization_code": "124131"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "c935ddb3-610e-4394-acae-79f44c0f7ff6", "first_installment_expiration_date": null}',
    packsComprados: 2,
    idPack: 1,
  },
  {
    id: '77662d9b-8781-45f9-aaed-a0857de33687',
    tokenPago: 'a609ad5d-d957-4ec6-8b9f-9fda38e023c0',
    idPago: '10249054',
    valorTotal: 3999.98,
    cuotas: 1,
    lastFourDigits: '4905',
    idMetodoPago: 1,
    status: 'APPROVED',
    responsablePago: '1003553349',
    unidadFacturacion: null,
    fechaPago: '2021-02-18 15:37:59.0',
    nombreTitular: 'Federico Casares',
    statusDecidir: 'approved',
    statusDecidirDetalle:
      '{"error": null, "ticket": "4785", "address_validation_code": "VTE0011", "card_authorization_code": "123800"}',
    respuestaTransaccion:
      '{"id": 10249054, "bin": "450799", "pan": null, "date": "2021-02-18T12:38Z", "token": "a609ad5d-d957-4ec6-8b9f-9fda38e023c0", "amount": 399998, "status": "approved", "plan_id": null, "site_id": "28464383", "currency": "ARS", "customer": {"id": "1003553349", "email": "federico.casares@wolox.com.ar", "ip_address": null}, "card_data": {"card_holder": null, "card_number": null}, "confirmed": null, "date_created": null, "installments": 1, "payment_mode": null, "payment_type": "single", "sub_payments": [], "date_approved": null, "aggregate_data": null, "customer_token": null, "status_details": {"error": null, "ticket": "4785", "address_validation_code": "VTE0011", "card_authorization_code": "123800"}, "fraud_detection": null, "date_last_updated": null, "payment_method_id": 1, "establishment_name": null, "site_transaction_id": "77662d9b-8781-45f9-aaed-a0857de33687", "first_installment_expiration_date": null}',
    packsComprados: 2,
    idPack: 1,
  },
];

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send({
    page: req.query.page,
    size: req.query.size,
    transacciones: PACKS,
  });
});

export = router;
