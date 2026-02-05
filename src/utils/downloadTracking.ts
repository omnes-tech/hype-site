// Função para capturar parâmetros UTM da URL
const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
  };
};

// Função para identificar a página atual
const getPageIdentifier = () => {
  const pathname = window.location.pathname;
  
  if (pathname === '/') {
    return 'hypeApp principal';
  } else if (pathname === '/influenciadores') {
    return '/influenciadores';
  } else if (pathname === '/murais-campanhas') {
    return '/murais-campanhas';
  }
  
  return pathname;
};

// Função para enviar dados para o webhook e redirecionar para a loja
export const handleAppDownload = async (store: 'ios' | 'android', downloadUrl: string) => {
  const webhookUrl = 'https://vocenohype.app.n8n.cloud/webhook/a84982ba-be6e-4063-b16e-6452223ea1ad';
  
  try {
    // Capturar dados
    const utmParams = getUTMParams();
    const pageIdentifier = getPageIdentifier();
    
    // Preparar payload
    const payload = {
      ...utmParams,
      store: store === 'ios' ? 'App Store' : 'Google Play',
      page_title: pageIdentifier,
      timestamp: new Date().toISOString(),
    };

    // Enviar para o webhook (não bloquear o download se falhar)
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(error => {
      console.warn('Erro ao enviar dados do download:', error);
    });

    // Redirecionar para a loja
    window.open(downloadUrl, '_blank');
  } catch (error) {
    console.warn('Erro no tracking de download:', error);
    // Mesmo com erro, ainda redireciona para a loja
    window.open(downloadUrl, '_blank');
  }
};