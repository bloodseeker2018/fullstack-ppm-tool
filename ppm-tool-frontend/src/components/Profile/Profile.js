import React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import image from "../../assests/sanup.jpeg";


const Profile = (props) => {
    const { user } = props.security
    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card mb-1 bg-light">

                            <div className={`card-header text-primary bg-info text-light`}>
                                <h3>Profile</h3>
                            </div>
                            <div className="card-body bg-light">
                                <div className="mb-4">
                                    <img src={image} alt="person" width="300" height="500"></img>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-1 text-secondary">
                                    <h5 className='mr-2'>Name:</h5>
                                    <h4>{user.fullname}</h4>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-1 text-secondary">
                                    <h5 className='mr-2'>Email:</h5>
                                    <h4>{user.username}</h4>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-1 text-secondary">
                                    <h5 className='mr-2'>Student Id:</h5>
                                    <h4>{user.studentId}</h4>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-1 text-secondary">
                                    <h5 className='mr-2'>Address:</h5>
                                    <h4>{user.address}</h4>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-1 text-secondary">
                                    <h5 className='mr-2'>Phone Number:</h5>
                                    <h4>{user.phoneNumber}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

Profile.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Profile);;