'use client'

import { Form, InputForm } from 'shared/ui'

export default function AdminPage() {
  return (
    <>
      <section className='section section--pb-0'>
        <div className='container'>
          <h1 className='h1 text-uppercase section__heading section__heading--mb-sm'>add new nft</h1>
          <div className='new-nft'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='new-nft__right'>1 of 2</div>
              </div>
              <div className='col-md-7'>
                <div className='new-nft__right'>
                  <div className='new-nft__label'>Basic Info</div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </div>
                    <div className='col-md-6'>
                      <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </div>
                    <div className='col-md-6'>
                      <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </div>
                    <div className='col-md-6'>
                      <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </div>
                    <div className='col-md-6'>
                      <InputForm name='email' label='Username or email' placeholder='Enter your username or email' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
