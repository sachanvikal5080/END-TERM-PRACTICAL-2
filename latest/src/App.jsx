import React, { useState } from 'react';

function App() {

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [si, setSi] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [error, setError] = useState('');


  const calculate = () => {
    if (principal === '' || rate === '' || time === '') {
      setError('Please fill all 3 fields!');
      setSi(null);
      setTotalAmount(null);
      return;
    }

    if (principal <= 0 || rate <= 0 || time <= 0) {
      setError('All values must be greater than 0!');
      setSi(null);
      setTotalAmount(null);
      return;
    }

    setError('');

    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    const simpleInterest = (P * R * T) / 100;
    const total = P + simpleInterest;

    setSi(simpleInterest.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };


  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setSi(null);
    setTotalAmount(null);
    setError('');
  };


  const styles = {
    page: {
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
    },
    box: {
      background: 'white',
      padding: '40px 35px',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '460px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      color: '#1a1a2e',
      marginBottom: '8px',
      fontWeight: '800',
    },
    formulaText: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#777',
      background: '#f5f5f5',
      padding: '6px 10px',
      borderRadius: '20px',
      marginBottom: '28px',
    },
    inputGroup: {
      marginBottom: '18px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '7px',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '10px',
      fontSize: '15px',
      color: '#333',
      outline: 'none',
      boxSizing: 'border-box',
    },
    errorBox: {
      background: '#fff0f0',
      color: '#c53030',
      border: '1.5px solid #fc8181',
      padding: '10px 15px',
      borderRadius: '8px',
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '15px',
    },
    buttonRow: {
      display: 'flex',
      gap: '12px',
      marginBottom: '25px',
    },
    btnCalculate: {
      flex: 1,
      padding: '13px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      background: '#0f3460',
      color: 'white',
    },
    btnReset: {
      flex: 1,
      padding: '13px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      background: '#e0e0e0',
      color: '#333',
    },
    resultBox: {
      background: '#f8f9ff',
      border: '1.5px solid #dde',
      borderRadius: '15px',
      padding: '22px 18px',
    },
    resultTitle: {
      textAlign: 'center',
      fontSize: '20px',
      color: '#1a1a2e',
      marginBottom: '12px',
      fontWeight: '700',
    },
    formulaCalc: {
      background: '#1a1a2e',
      color: '#00ff88',
      textAlign: 'center',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '13px',
      fontFamily: 'monospace',
      marginBottom: '14px',
    },
    resultCard: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 18px',
      borderRadius: '12px',
      marginBottom: '10px',
      color: 'white',
    },
    cardLabel: {
      fontSize: '14px',
      fontWeight: '600',
      opacity: '0.9',
      margin: 0,
    },
    cardValue: {
      fontSize: '20px',
      fontWeight: '800',
      margin: 0,
    },
    green: {
      background: 'linear-gradient(135deg, #38a169, #68d391)',
    },
    blue: {
      background: 'linear-gradient(135deg, #2b6cb0, #63b3ed)',
    },
    purple: {
      background: 'linear-gradient(135deg, #6b46c1, #b794f4)',
    },
  };


  return (
    <div style={styles.page}>

      <div style={styles.box}>

        <h1 style={styles.title}>
          Simple Interest Calculator
        </h1>

        <p style={styles.formulaText}>
          Formula: SI = (P × R × T) / 100
        </p>


        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Principal Amount (P)
          </label>
          <input
            style={styles.input}
            type="number"
            placeholder="Enter principal amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>


        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Rate of Interest (R) in %
          </label>
          <input
            style={styles.input}
            type="number"
            placeholder="Enter rate of interest"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>


        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Time Period (T) in Years
          </label>
          <input
            style={styles.input}
            type="number"
            placeholder="Enter time in years"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>


        {error !== '' && (
          <div style={styles.errorBox}>
            ⚠️ {error}
          </div>
        )}


        <div style={styles.buttonRow}>
          <button
            style={styles.btnCalculate}
            onClick={calculate}
          >
            Calculate
          </button>
          <button
            style={styles.btnReset}
            onClick={reset}
          >
            Reset
          </button>
        </div>


        {si !== null && (
          <div style={styles.resultBox}>

            <h2 style={styles.resultTitle}>Result</h2>

            <div style={styles.formulaCalc}>
              SI = ({principal} × {rate} × {time}) / 100 = {si}
            </div>

            <div style={{...styles.resultCard, ...styles.green}}>
              <p style={styles.cardLabel}>Simple Interest (SI)</p>
              <p style={styles.cardValue}>₹ {si}</p>
            </div>

            <div style={{...styles.resultCard, ...styles.blue}}>
              <p style={styles.cardLabel}>Principal Amount (P)</p>
              <p style={styles.cardValue}>₹ {principal}</p>
            </div>

            <div style={{...styles.resultCard, ...styles.purple}}>
              <p style={styles.cardLabel}>Total Amount (P + SI)</p>
              <p style={styles.cardValue}>₹ {totalAmount}</p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;
