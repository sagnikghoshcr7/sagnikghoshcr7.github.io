import React from 'react'

export default function Section({ id, title, children }) {
  return (
    <React.Fragment>
      <section className='resume-section' id={id}>
        <div className='resume-section-content'>
          {title && <h2 className='mb-5'>{title}</h2>}
          {children}
        </div>
      </section>
      <hr className='m-0' />
    </React.Fragment>
  )
}
