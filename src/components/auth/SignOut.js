import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='row' style={{ backgroundColor: "#0353a4"}}>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2>You sure?</h2>
                    <ButtonGroup>
                        <Button variant='danger' onClick={onSignOut} >
                            Sign Out
                        </Button>
                        <Button variant='warning' onClick={onCancel}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
		</>
	)
}

export default SignOut
