import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div class='section section--muted'>
      <div class='container u-pb2 u-pt2'>
        <div class='signup js-signup' data-nosnippet>
          <div class='signup__inner'>
            <div class='signup__content js-signup-content'>
              <h3 class='signup__title'>
                <svg
                  class='icon icon--letter'
                  role='img'
                  aria-hidden='true'
                  width='24'
                  height='24'
                ></svg>
                Always in the loop.
              </h3>

              <div class='rich-text'>
                <p>
                  Join our many subscribers and get professional insights in
                  e-commerce and other digital projects from our mailing list.
                  No spam ever, unsubscribe anytime.
                </p>
                <p>
                  Members of the list will also get exclusive access to our
                  ebooks and are notified first when new content becomes
                  available.
                </p>
              </div>
            </div>
            <div class='signup__form'>
              <form
                action='https://codista.us19.list-manage.com/subscribe/post'
                method='POST'
                class='form form--signup'
              >
                <div class='form__feedback js-signup-feedback' hidden></div>
                <div class='form__body'>
                  <input
                    type='hidden'
                    name='u'
                    value='d0608a7c4c54608d4f07ba328'
                  />
                  <input type='hidden' name='id' value='5682cb29ee' />
                  <input type='hidden' name='REF' value='/en/' />
                  <input type='hidden' name='LANG' value='en' />
                  <input type='hidden' name='gdpr[61584]' value='Y' />

                  <div class='form__fields'>
                    <div class='field js-textfield'>
                      <div class='field__inner'>
                        <label for='mce-EMAIL' class='field__label'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          class='field__input'
                          value=''
                          name='EMAIL'
                          id='mce-EMAIL'
                          required
                        />
                      </div>
                    </div>
                    <div class='field js-textfield'>
                      <div class='field__inner'>
                        <label for='mce-FNAME' class='field__label'>
                          First Name (optional)
                        </label>
                        <input
                          type='text'
                          class='field__input'
                          value=''
                          name='FNAME'
                          id='mce-FNAME'
                        />
                      </div>
                    </div>
                    <div class='field js-textfield'>
                      <div class='field__inner'>
                        <label for='mce-LNAME' class='field__label'>
                          Last Name (optional)
                        </label>
                        <input
                          type='text'
                          class='field__input'
                          value=''
                          name='LNAME'
                          id='mce-LNAME'
                        />
                      </div>
                    </div>
                  </div>

                  <div class='sr-only' aria-hidden='true'>
                    <input
                      type='text'
                      name='b_d0608a7c4c54608d4f07ba328_5682cb29ee'
                      tabindex='-1'
                      value=''
                    />
                  </div>
                </div>

                <div class='form__actions'>
                  <button
                    type='submit'
                    class='btn btn--large btn--primary'
                    name='subscribe'
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div class='spinner'>
                <div class='spinner__layercontainer'>
                  <div class='spinner__layer spinner__layer--1'>
                    <div class='spinner__circle-clipper spinner__left'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__gap-patch'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__circle-clipper spinner__right'>
                      <div class='spinner__circle'></div>
                    </div>
                  </div>

                  <div class='spinner__layer spinner__layer--2'>
                    <div class='spinner__circle-clipper spinner__left'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__gap-patch'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__circle-clipper spinner__right'>
                      <div class='spinner__circle'></div>
                    </div>
                  </div>

                  <div class='spinner__layer spinner__layer--3'>
                    <div class='spinner__circle-clipper spinner__left'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__gap-patch'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__circle-clipper spinner__right'>
                      <div class='spinner__circle'></div>
                    </div>
                  </div>

                  <div class='spinner__layer spinner__layer--4'>
                    <div class='spinner__circle-clipper spinner__left'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__gap-patch'>
                      <div class='spinner__circle'></div>
                    </div>
                    <div class='spinner__circle-clipper spinner__right'>
                      <div class='spinner__circle'></div>
                    </div>
                  </div>
                </div>
              </div>

              <audio
                src='/static/audio/success.fa5a3afc1ffa.wav'
                class='js-signup-success-sound'
                preload='auto'
                hidden
              ></audio>
              <span class='checkmark'>
                <svg
                  class='icon icon--check'
                  role='img'
                  aria-hidden='true'
                  width='24'
                  height='24'
                ></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
