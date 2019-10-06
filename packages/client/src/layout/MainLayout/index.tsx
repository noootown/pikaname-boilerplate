import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({
  userAuth,
  main: MainComponent,
  ...rest
}: {
  userAuth: any
  main: any
  rest: any[]
}) => {

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MainComponent
        auth={userAuth}
        {...rest}
      />
    </div>
  )
}

MainLayout.propTypes = {
  userAuth: PropTypes.shape({
    userId: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  main: PropTypes.func,
}

export default MainLayout
