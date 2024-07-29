'use client'

import classNames from 'classnames'
import { Stack, Container, Row, Col } from 'react-bootstrap'
import { Form, InputForm } from 'shared/ui'

export default function AdminPage() {
  return (
    <>
      <section className='section section--pb-0'>
        <Container>
          <h1 className='display-1 text-uppercase section__heading section__heading--mb-sm'>add new nft</h1>
          <div className='new-nft'>
            <Row gap={2}>
              <Col md={5}>
                <div className='new-nft__right'>1 of 2</div>
              </Col>
              <Col md={7}>
                <div className='new-nft__right'>
                  <div className='new-nft__label'>Basic Info</div>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                      </Col>
                      <Col md={6}>
                        <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                      </Col>
                      <Col md={6}>
                        <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                      </Col>
                      <Col md={6}>
                        <InputForm type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                      </Col>
                      <Col md={12}>
                        <InputForm name='email' label='Username or email' placeholder='Enter your username or email' />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}
