import React, { useState } from "react";
import { Container, Title, Result } from "./style";

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function SalarioMes () {
  const [diastrabalhados, settrabalhos] = useState("");
  const [salariodia, setSalarioD] = useState("");
  const [mes, setImc] = useState("");

  function calcularSPD() {
    let mes = Number(diastrabalhados) *Number(salariodia);
    setImc(mes.toFixed(2));
  }

  return (
    <Container>
      <Title>Calcular o Salário por Mês</Title>

      <MyInput 
        myPlaceholder="Dias Trabalhados"  
        value={diastrabalhados} 
        onChangeText={settrabalhos} 
      />

      <MyInput 
        myPlaceholder="Salário por Dia" 
        value={salariodia} 
        onChangeText={setSalarioD} 
      />

      <MyButton title="Calcular" onPress={() => calcularSPD()} />

      <Result>Salário por Mês: {mes}</Result>
      
    </Container>
  );
}
