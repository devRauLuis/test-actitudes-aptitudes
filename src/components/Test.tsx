import React from 'react';
import { Formik, Field, Form } from 'formik';

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <Formik
        initialValues={{
          picked: ''
        }}
        onSubmit={async (values) => {}}>
        {({ values }) => (
          <Form>
            <div id="p2">Pregunta 1</div>
            <div role="group" aria-labelledby="p1">
              <label>
                <Field type="radio" name="p1" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p1" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 3</div>
            <div role="group" aria-labelledby="p3">
              <label>
                <Field type="radio" name="p3" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p3" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <div id="p2">Pregunta 2</div>
            <div role="group" aria-labelledby="p2">
              <label>
                <Field type="radio" name="p2" value="Si" />
                Si
              </label>
              <label>
                <Field type="radio" name="p2" value="No" />
                NO
              </label>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Test;
