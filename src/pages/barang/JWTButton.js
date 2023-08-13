import React, { useState } from "react";
import * as jose from "jose";
import { Buffer } from "buffer";

export default function JWTButton(props) {
  const [showModal, setShowModal] = useState(false);
  const [jwtToken, setJwtToken] = useState("");
  const secret = Buffer.from("62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47", "hex");

  const encryptedJwt = async () => {
    const signJwt = await new jose.SignJWT(props.store).setProtectedHeader({ alg: "HS256" }).setSubject("testsub").setIssuedAt().setIssuer("https://example.com").setAudience("https://example.com/test").setExpirationTime("1d").sign(secret);
    setJwtToken(signJwt);
    setShowModal(true);
  };

  return (
    <>
      <button onClick={encryptedJwt} className="button button-jwt">
        JWT
      </button>
      {showModal ? (
        <>
          <div className="modal">
            <div className="modal-content">
              <h1>JWT Token barang pada {props.nama}</h1>
              <div className="border-t border-gray-600 mt-2 mb-2"></div>
              {jwtToken.length === 0 ? null : (
                <div className="token">
                  <h2>
                    <p>Kode token : {jwtToken}</p>
                    <div className="border-t border-gray-600 mt-2 mb-2"></div>
                    <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
                      check di jwt.io
                    </a>
                  </h2>
                  <button type="button" onClick={() => setShowModal(false)} className="button button-close mt-2">
                    close
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
