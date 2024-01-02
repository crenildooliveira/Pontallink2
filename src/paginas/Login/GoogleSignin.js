import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configurar as credenciais
GoogleSignin.configure({
  webClientId: '936576413693-ovoaemaijg975015eb89rj6pqbb8rd52.apps.googleusercontent.com',
  offlineAccess: true,
});

// Função para lidar com o login
const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    // Você pode usar as informações do usuário aqui
  } catch (error) {
    console.error('Erro ao fazer login com o Google:', error);
  }
};

// Exportar a função para torná-la acessível em outros arquivos
export { handleGoogleLogin };
