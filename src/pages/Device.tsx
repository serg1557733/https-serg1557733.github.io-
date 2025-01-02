import { useState, useEffect } from "react";

const round = (num, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
};

const DeviceMotionComponent = () => {
  const [motionData, setMotionData] = useState<{
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
    rotationRateAlpha: number;
    rotationRateBeta: number;
    rotationRateGamma: number;
  }>({
    accelerationX: 0,
    accelerationY: 0,
    accelerationZ: 0,
    rotationRateAlpha: 0,
    rotationRateBeta: 0,
    rotationRateGamma: 0,
  });

  useEffect(() => {
    const handleMotion = (event: DeviceMotionEvent) => {
      if (event.acceleration && event.rotationRate) {
        setMotionData({
          accelerationX: round(event.acceleration.x, 2) ?? 0,
          accelerationY: round(event.acceleration.y, 2) ?? 0,
          accelerationZ: round(event.acceleration.z, 2) ?? 0,
          rotationRateAlpha: round(event?.rotationRate.alpha, 2) ?? 0,
          rotationRateBeta: round(event?.rotationRate.beta, 2) ?? 0,
          rotationRateGamma: round(event?.rotationRate.gamma, 2) ?? 0,
        });
      }
    };

    window.addEventListener("devicemotion", handleMotion);
  }, []);

  const [orientation, setOrientation] = useState<{
    alpha: number;
    beta: number;
    gamma: number;
  }>({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
        setOrientation({
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma,
        });
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div>
      <h1>Device Motion</h1>
      <p>Acceleration X: {motionData.accelerationX}</p>
      <p>Acceleration Y: {motionData.accelerationY}</p>
      <p>Acceleration Z: {motionData.accelerationZ}</p>
      <p>Rotation Alpha: {motionData.rotationRateAlpha}</p>
      <p>Rotation Beta: {motionData.rotationRateBeta}</p>
      <p>Rotation Gamma: {motionData.rotationRateGamma}</p>
      <p>Orientation Alpha: {orientation.alpha}</p>
      <p>Orientation Beta: {orientation.beta}</p>
      <p>Orientation Gamma: {orientation.gamma}</p>
    </div>
  );
};

export default DeviceMotionComponent;
