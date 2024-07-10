import React, { useState } from 'react';

    function IMCCalculator() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setImc(imcCalculado);
        setClassificacao(classificarIMC(imcCalculado));
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
        if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
        if (imc >= 40) return 'Obesidade grau III';
        return '';
    };

    const handleAlturaChange = (e) => setAltura(e.target.value);
    const handlePesoChange = (e) => setPeso(e.target.value);

    return (
        <div>
        <div>
            <label>
            Altura (cm):
            <input type="number" value={altura} onChange={handleAlturaChange} />
            </label>
        </div>
        <div>
            <label>
            Peso (kg):
            <input type="number" value={peso} onChange={handlePesoChange} />
            </label>
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && (
            <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
            </div>
        )}
        </div>
    );
}

export default IMCCalculator;