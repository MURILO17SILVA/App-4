import { Container, Title } from "./style";

import MyButton from "../../components/MyButton";

export default function HomeScreen ({ navigation }) {
  return (
    <Container>
      <Title>Tela Principal</Title>

      <MyButton title="CalcularSalarioPorDia" onPress={() => navigation.navigate("CalculadoraDia")} />
      <MyButton title="CalcularSalarioPorMes" onPress={() => navigation.navigate("SalarioMes")} />

    </Container>
  );
}
