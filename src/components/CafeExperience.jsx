import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { Link } from "react-router-dom";

function Pastry({ position, color }) {
  return (
    <group position={position}>
      <mesh castShadow position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.32, 0.35, 0.2, 32]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.23, 24, 16]} />
        <meshStandardMaterial color="#f6dfc7" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Donut({ position }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]} castShadow>
      <torusGeometry args={[0.22, 0.09, 16, 32]} />
      <meshStandardMaterial color="#d99a78" roughness={0.55} />
    </mesh>
  );
}

function Shelf({ y }) {
  return (
    <group position={[-1.8, y, -2.75]}>
      <mesh castShadow>
        <boxGeometry args={[3.2, 0.12, 0.55]} />
        <meshStandardMaterial color="#805b48" roughness={0.5} />
      </mesh>

      <Pastry position={[-1, 0.22, 0]} color="#e9b58b" />
      <Pastry position={[0, 0.22, 0]} color="#d9a078" />
      <Donut position={[1, 0.35, 0]} />
    </group>
  );
}

function CafeRoom() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#d8c2b2" roughness={0.85} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2.5, -3.4]} receiveShadow>
        <boxGeometry args={[13, 5, 0.2]} />
        <meshStandardMaterial color="#f1dfe0" roughness={0.9} />
      </mesh>

      {/* Side walls */}
      <mesh position={[-6.5, 2.5, 0]}>
        <boxGeometry args={[0.2, 5, 7]} />
        <meshStandardMaterial color="#f7e9e4" />
      </mesh>

      <mesh position={[6.5, 2.5, 0]}>
        <boxGeometry args={[0.2, 5, 7]} />
        <meshStandardMaterial color="#f7e9e4" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 5.05, 0]}>
        <boxGeometry args={[13, 0.15, 7]} />
        <meshStandardMaterial color="#fff4e9" />
      </mesh>

      {/* Wall decoration */}
      <mesh position={[0, 3.7, -3.23]}>
        <boxGeometry args={[2.8, 0.9, 0.12]} />
        <meshStandardMaterial
          color="#805b50"
          roughness={0.45}
        />
      </mesh>

      {/* Shelves */}
      <Shelf y={2.5} />
      <Shelf y={3.35} />

      {/* Counter base */}
      <RoundedBox
        args={[5.2, 1.35, 1.3]}
        radius={0.08}
        position={[0.3, 0.72, 0.8]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#956d59" roughness={0.42} />
      </RoundedBox>

      {/* Counter top */}
      <RoundedBox
        args={[5.45, 0.16, 1.5]}
        radius={0.06}
        position={[0.3, 1.48, 0.8]}
        castShadow
      >
        <meshStandardMaterial
          color="#f2e5dd"
          roughness={0.25}
          metalness={0.05}
        />
      </RoundedBox>

      {/* Counter front detail */}
      <mesh position={[0.3, 0.75, 1.47]}>
        <boxGeometry args={[4.7, 0.08, 0.04]} />
        <meshStandardMaterial color="#d7b19d" />
      </mesh>

      {/* Counter decorations */}
      <Pastry position={[-1.1, 1.65, 0.7]} color="#e6b18c" />
      <Pastry position={[0, 1.65, 0.7]} color="#d99b86" />
      <Donut position={[1.1, 1.8, 0.7]} />

      {/* Hanging lights */}
      {[ -2.8, 0, 2.8 ].map((x, index) => (
        <group key={index} position={[x, 4.8, -0.3]}>
          <mesh position={[0, -0.55, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 1.1, 12]} />
            <meshStandardMaterial color="#8c7163" />
          </mesh>

          <mesh position={[0, -1.15, 0]}>
            <sphereGeometry args={[0.22, 24, 16]} />
            <meshStandardMaterial
              color="#fff0c9"
              emissive="#ffca80"
              emissiveIntensity={0.8}
            />
          </mesh>

          <pointLight
            position={[0, -1.15, 0]}
            intensity={0.8}
            distance={4}
            color="#ffcf9c"
          />
        </group>
      ))}
    </>
  );
}

function CafeExperience({ mode = "register" }) {
  const isRegister = mode === "register";
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Demo form only — account setup needs authentication.");
  }

  return (
    <div className="cafe-experience">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [8, 6, 10], fov: 40 }}
      >
        <color attach="background" args={["#f4e5df"]} />

        <ambientLight intensity={1.1} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <pointLight
          position={[-3, 3, 2]}
          intensity={1}
          color="#ffd8c5"
        />

        <CafeRoom />
      </Canvas>

      <div className="cafe-brand">
        <span>✦ SWEET BITES ✦</span>
        <p>BAKE · SHARE · ENJOY</p>
      </div>

      <section className="experience-card">
        <div className="experience-heading">
          <span className="experience-star">✦</span>

          <h1>
            {isRegister ? "Create Account" : "Welcome Back"}
          </h1>

          <p>
            {isRegister
              ? "Join our sweet little world"
              : "Your favorite treats are waiting"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </>
          )}

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            {isRegister ? "Create Account" : "Login"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>

        <div className="experience-switch">
          {isRegister ? (
            <>
              Already have an account?
              <Link to="/login"> Login</Link>
            </>
          ) : (
            <>
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </>
          )}
        </div>
      </section>

      <style>{`
        .cafe-experience {
          position: relative;
          width: 100%;
          min-height: 780px;
          height: calc(100vh - 100px);
          overflow: hidden;
          background: #f4e5df;
        }

        .cafe-experience canvas {
          position: absolute;
          inset: 0;
        }

        .cafe-brand {
          position: absolute;
          top: 35px;
          left: 6%;
          color: #704b43;
          font-family: Georgia, serif;
          text-align: center;
          text-shadow: 0 2px 8px #ffffffaa;
        }

        .cafe-brand span {
          font-size: 27px;
          letter-spacing: 3px;
          font-weight: bold;
        }

        .cafe-brand p {
          font-size: 11px;
          letter-spacing: 4px;
        }

        .experience-card {
          position: absolute;
          top: 50%;
          right: 6%;
          transform: translateY(-50%);
          width: 370px;
          padding: 35px;
          border-radius: 22px;
          background: rgba(255, 248, 246, 0.94);
          border: 1px solid #ffffff;
          box-shadow: 0 25px 60px #49302b55;
          backdrop-filter: blur(15px);
          font-family: Arial, sans-serif;
        }

        .experience-heading {
          text-align: center;
          margin-bottom: 25px;
        }

        .experience-star {
          color: #bd8195;
          font-size: 25px;
        }

        .experience-heading h1 {
          color: #704b58;
          font-family: Georgia, serif;
          font-size: 27px;
          margin: 12px 0 8px;
        }

        .experience-heading p {
          color: #987783;
          font-size: 13px;
        }

        .experience-card form {
          display: flex;
          flex-direction: column;
        }

        .experience-card label {
          color: #704b58;
          font-size: 13px;
          margin: 12px 0 7px;
        }

        .experience-card input {
          padding: 13px;
          border: 1px solid #e5cbd2;
          border-radius: 9px;
          background: white;
          outline: none;
          color: #60434d;
        }

        .experience-card input:focus {
          border-color: #bd8195;
          box-shadow: 0 0 0 3px #bd819522;
        }

        .experience-card button {
          margin-top: 23px;
          padding: 14px;
          border: none;
          border-radius: 9px;
          color: white;
          background: linear-gradient(135deg, #bd8195, #956073);
          font-weight: bold;
          cursor: pointer;
          transition: 0.25s;
        }

        .experience-card button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px #95607355;
        }

        .experience-switch {
          text-align: center;
          color: #8d707a;
          font-size: 12px;
          margin-top: 22px;
        }

        .experience-switch a {
          color: #a45f79;
          font-weight: bold;
          text-decoration: none;
        }

        .form-message {
          color: #956073;
          font-size: 12px;
          line-height: 1.5;
          text-align: center;
        }

        @media (max-width: 750px) {
          .cafe-experience {
            min-height: 850px;
            height: auto;
          }

          .cafe-brand {
            top: 25px;
            left: 0;
            width: 100%;
          }

          .experience-card {
            top: 53%;
            right: 50%;
            transform: translate(50%, -50%);
            width: min(90%, 370px);
            padding: 28px 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default CafeExperience;
