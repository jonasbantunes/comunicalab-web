import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Error from './Error';
import '../styles/Form.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'O nome do Equipamento tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Equipamento tem que ser menor que 255 caracteres!')
    .required('Digite o nome do Equipamento!'),
  category: Yup.string()
    .min(5, 'O nome do Equipamento tem que ser maior que 5 caracteres!')
    .max(255, 'O nome do Equipamento tem que ser menor que 255 caracteres!')
    .required('Digite a categoria do Equipamento!'),
});

export default function Form() {
  return (
    <Formik
      initialValues={{ name: '', category: '', localization: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <div className="Form-Row">
              <div className="Form-Label">
                <p>Nome:</p>
              </div>
              <div className="Form-Input">
                <input
                  name="name"
                  id="name"
                  placeholder="Nome do Equipamento"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  className={touched.name && errors.name ? 'has-error' : null}
                />
              </div>
              <Error touched={touched.name} message={errors.name} />
            </div>
            <div className="Form-Row">
              <div className="Form-Label">
                <p>Categoria:</p>
              </div>
              <div className="Form-Input">
                <input
                  name="category"
                  id="category"
                  placeholder="Categoria"
                  type="text"
                  onChange={handleChange}
                  value={values.category}
                  onBlur={handleBlur}
                  className={
                    touched.category && errors.category ? 'has-error' : null
                  }
                />
              </div>
              <Error touched={touched.category} message={errors.category} />
            </div>
            <div className="Form-Row">
              <div className="Form-Label">
                <p>Localização:</p>
              </div>
              <div className="Form-Select">
                <select
                  name="localization"
                  id="localization"
                  onChange={handleChange}
                  value={values.localization}
                  onBlur={handleBlur}
                  className={
                    touched.localization && errors.localization
                      ? 'has-error'
                      : null
                  }
                >
                  <option value="" disabled selected hidden>
                    Escolha a localização
                  </option>
                  <option value="2" id="2">
                    2
                  </option>
                  <option value="3" id="3">
                    3
                  </option>
                  <option value="4" id="4">
                    4
                  </option>
                </select>
              </div>
              <Error
                touched={touched.localization}
                message={errors.localization}
              />
            </div>
            <div className="Form-Button">
              <div className="Form-Button-Cancel">
                <button type="button"> Cancelar </button>
              </div>
              <div className="Form-Button-Register">
                <button type="submit" disabled={isSubmitting}>
                  Registrar
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}
