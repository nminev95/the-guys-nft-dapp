import cn from 'classnames'
import { NotificationState } from '@providers/NotificationProvider/NotificationProvider.types'
import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Slide,
  SlideProps,
  Snackbar
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Props = NotificationState

type TransitionProps = Omit<SlideProps, 'direction'>

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />
}

const TransitionLeft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />
}

const Notification = ({ type, text, isVisible, hideNotification }: Props) => {
  return (
    <div className="Notification">
      {type && (
        <Snackbar
          open={isVisible}
          action={
            <React.Fragment>
              <button>ASDASDASDASDASDAS</button>
            </React.Fragment>
          }
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={TransitionLeft}
          onClose={hideNotification}
        >
          <Alert variant="filled" severity={type}>
            <AlertTitle sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
              {type}
            </AlertTitle>
            {text}
          </Alert>
        </Snackbar>
      )}
    </div>
  )
}

export default Notification
