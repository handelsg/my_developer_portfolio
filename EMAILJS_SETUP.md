# Configuração do Formulário de Contato

## Status Atual
✅ **Formulário funcional implementado**
- O formulário está funcionando e captura todos os dados
- Por enquanto, os dados são logados no console (para demonstração)
- Para ativar o envio real de emails, siga as instruções abaixo

## EmailJS Setup (Opcional - para envio real de emails)

### 1. Ativando o EmailJS Real

Para substituir a simulação por envio real de emails, edite o arquivo `src/lib/emailService.ts`:

```typescript
export const sendEmail = async (emailData: EmailData): Promise<void> => {
  try {
    // Descomente e configure as linhas abaixo:
    const emailjs = await import('@emailjs/browser');
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'your_service_id';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'your_template_id';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'your_public_key';
    
    await emailjs.send(serviceId, templateId, emailData, publicKey);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Falha ao enviar email');
  }
};
```

### 1. Crie uma conta no EmailJS
- Acesse https://www.emailjs.com/
- Crie uma conta gratuita

### 2. Configure um serviço de email
- No dashboard, vá em "Email Services"
- Adicione um serviço (Gmail, Outlook, etc.)
- Anote o **Service ID**

### 3. Crie um template de email
- Vá em "Email Templates"
- Crie um novo template
- Use estas variáveis no template:
  - `{{from_name}}` - Nome do remetente
  - `{{from_email}}` - Email do remetente  
  - `{{company}}` - Empresa (opcional)
  - `{{message}}` - Mensagem
  - `{{to_email}}` - Seu email (handelsantanagomes@gmail.com)
- Anote o **Template ID**

### 4. Obtenha a chave pública
- Vá em "Account" → "General"
- Copie a **Public Key**

### 5. Configure as variáveis de ambiente
- Copie o arquivo `.env.example` para `.env`
- Substitua os valores:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### 6. Teste o formulário
- Reinicie o servidor de desenvolvimento
- Teste o formulário de contato no site

## Exemplo de Template EmailJS

Título: **Nova mensagem do portfólio - {{from_name}}**

Corpo:
```
Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
```
