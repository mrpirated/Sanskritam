import React from "react";
import "./login.scss";

export function Login() {
    return (
        <div>
            <section className="container-fluid parent-div">
                <section className="row">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-container">
                            <label style={{ fontWeight: "700", fontSize: "35px", marginBottom:"30px"}}>Login</label>
                            <div class="form-group">
                                <label style={{ fontWeight: "500", fontSize: "20px" }}>Email address:</label>
                                <input type="email" class="form-control" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label style={{ fontWeight: "500", fontSize: "20px" }}>Password:</label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" style={{margin: "20px 0px"}}>Submit</button>
                        <label
                            className=""
                            htmlFor=""
                            style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            textAlign: "center",
                            }}
                        >
                                New User?
                        </label>
                        <div>
                            <a
                                href="#"
                                style={{ fontWeight: "500", fontSize: "17px", textAlign:"center"}}
                            >
                                Create Account 
                            </a>
                        </div>
                        </form>
                        
                    </section>
                </section>
                
            </section>

        </div> 
    );
};