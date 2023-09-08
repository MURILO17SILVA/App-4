import React, { useState } from "react";
import { Container, Title, Result } from "./style";

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function CalculadoraDia () {
  const [dtrabalhado, setdtrabalhado] = useState("");
  const [srecebido, setsalario] = useState("");
  const [spd, setIcq] = useState("");

  function calcularspd() {
    let spd= Number(dtrabalhado) / Number(srecebido);
    setIcq(spd.toFixed(2));
  }

  return (
    <Container>
      <Title>Calculador Salário por  Dia</Title>

      <MyInput 
        myPlaceholder="Dias Trabalhados" 
        value={dtrabalhado} 
        onChangeText={setdtrabalhado} 
      />

      <MyInput 
        myPlaceholder="Salário Recebido" 
        value={srecebido} 
        onChangeText={setsalario} 
      />

      <MyButton title="Calcular" onPress={() => calcularspd()} />

      <Result>Salário por Dia é: {spd}</Result>
      
    </Container>
  );
}
