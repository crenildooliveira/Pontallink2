import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

// Configurar as credenciais
GoogleSignin.configure({
  webClientId: '907709154105-2anbeclit1kqp8a492v6fa7lrkhtkgdm.apps.googleusercontent.com',
  offlineAccess: true,
});

// Função para lidar com o login
const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    navigation.navigate('Feed');
    // Você pode usar as informações do usuário aqui
  } catch (error) {
    console.error('Erro ao fazer login com o Google:', error);
  }
};

// Exportar a função para torná-la acessível em outros arquivos
export { handleGoogleLogin };
