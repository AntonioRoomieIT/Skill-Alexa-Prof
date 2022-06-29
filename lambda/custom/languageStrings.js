/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: 'Welcome, you can say Hello or Help. Which would you like to try?',
            HELLO_MSG: 'Hello World!',
            HELP_MSG: 'You can say hello to me! How can I help?',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.'
        }
    },
    es: {
        translation: {
            WELCOME_MSG: ``,
            GRACIAS_MSG :'Esta bien, voy a estar por aqui por cualquier cosa, recuerda que puedes descargar nuestra aplicacion, la cual esta disponible en  Disponible para google play y App store',
            QUE_ES_UN_AFORE_MSG: 'Las Administradoras de Fondos para el Retiro (Afore) son instituciones financieras que administran las cuentas individuales de los trabajadores afiliados al IMSS y al ISSSTE.',
            PARA_QUE_SIRVE_UN_AFORE_MSG:'El objetivo de las afores, es hacerlas crecer para obtener el mejor retiro posible, asesorar y dar visibilidad al trabajador sobre el desempeño de su ahorro.  En Profuturo trabajamos para que el fruto de tu esfuerzo se convierta en un futuro prometedor y lleno de tranquilidad. Acércate a nosotros y construyamos juntos el futuro que te mereces.',
            QUIEN_ES_PROFUTURO_MSG:'Profuturo es la primera Afore que ofrece una aplicación móvil. Con ella puedes consultar tus saldos y últimos estados de cuenta, leer noticias relevantes y hacer aportaciones voluntarias a tu fondo de ahorro.',
            AFORE_CON_PROFUTURO_MSG:'Cuando pones tu patrimonio en nuestras manos estás depositando tu confianza, y lo sabemos. Por eso, darte toda la seguridad es nuestra prioridad. Comunicate al 5598765532',
            VENTAJAS_AFORE_PROFUTURO_MSG:
            `
            Somos la institución por 5to año consecutivo, ofreciendo los mejores rendimientos del mercado.
            Primer lugar en el Indicador de Servicio, otorgado por CONSAR por cuarto año consecutivo.
            Tenemos 25 años de experiencia y el conocimiento para resguardar tu futuro.
            La CONDUSEF nos reconoció por nuestra alta calidad en la atención a clientes.
            `,
            QUIERO_SER_CLIENTE_PROFUTURO_MSG:'Cuando pones tu patrimonio en nuestras manos estás depositando tu confianza, y lo sabemos. Por eso, darte toda la seguridad es nuestra prioridad. Comunicate al 5598765532',
            HELLO_MSG: 'Hola, es un gusto saludarte ',
            HELP_MSG: 'Puedes preguntarme cualquier cosa diciendo: Alexa,seguido de tu duda, por ejemplo: "Alexa, ¿Que es un afore?" ',
            STOP_MSG : 'Por supuesto, me detendre, si deseas mas ayuda estare por aqui',
            GOODBYE_MSG: 'Nos vemos, si necesitas ayuda, estare por aqui.',
            REFLECTOR_MSG: 'Acabas de activar {{intentName}}',
            FALLBACK_MSG: 'Por ahora no puedo resolver tu duda, sin embargo me sigo entrenando para ser mas inteligente.',
            ERROR_MSG: 'Disculpa, ¿Podrias repetirme lo anterior?',
            PIVOT_MSG:'¿Que mas te gustaria saber?',
            GENERAL_REPROMPT:'Disculpa, no escuche tu peticion, ¿Podrias repetirla?'
        }
    },
    de: {
        translation: {
            WELCOME_MSG: 'Wilkommen, du kannst Hallo oder Hilfe sagen. Was würdest du gern tun?',
            HELLO_MSG: 'Hallo!',
            HELP_MSG: 'Du kannst hallo zu mir sagen. Wie kann ich dir helfen?',
            GOODBYE_MSG: 'Tschüss!',
            REFLECTOR_MSG: 'Du hast gerade {{intentName}} ausgelöst',
            FALLBACK_MSG: 'Es tut mir leid, ich weiss das nicht. Bitte versuche es erneut.',
            ERROR_MSG: 'Es tut mir leid, ich konnte das nicht machen. Bitte versuche es erneut.'
        }
    },
    ja: {
        translation: {
            WELCOME_MSG: 'ようこそ。こんにちは、または、ヘルプ、と言ってみてください。どうぞ！',
            HELLO_MSG: 'ハローワールド',
            HELP_MSG: 'こんにちは、と言ってみてください。どうぞ！',
            GOODBYE_MSG: 'さようなら',
            REFLECTOR_MSG: '{{intentName}}がトリガーされました。',
            FALLBACK_MSG: 'ごめんなさい。ちょっとよくわかりませんでした。もう一度言ってみてください。',
            ERROR_MSG: 'ごめんなさい。なんだかうまく行かないようです。もう一度言ってみてください。'
        }
    },
    fr: {
        translation: {
            WELCOME_MSG: 'Bienvenue sur le génie des salutations, dites-moi bonjour et je vous répondrai',
            HELLO_MSG: 'Bonjour à tous!',
            HELP_MSG: 'Dites-moi bonjour et je vous répondrai!',
            GOODBYE_MSG: 'Au revoir!',
            REFLECTOR_MSG: 'Vous avez invoqué l\'intention {{intentName}}',
            FALLBACK_MSG: 'Désolé, je ne sais pas. Pouvez-vous reformuler?',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler?'
        }
    },
    it: {
        translation: {
            WELCOME_MSG: 'Buongiorno! Puoi salutarmi con un ciao, o chiedermi aiuto. Cosa preferisci fare?',
            HELLO_MSG: 'Ciao!',
            HELP_MSG: 'Dimmi ciao e io ti risponderò! Come posso aiutarti?',
            GOODBYE_MSG: 'A presto!',
            REFLECTOR_MSG: 'Hai invocato l\'intento {{intentName}}',
            FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
            ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.'
        }
    },
    pt: {
        translation: {
            WELCOME_MSG: 'Bem vindo, você pode dizer Olá ou Ajuda. Qual você gostaria de fazer?',
            HELLO_MSG: 'Olá!',
            HELP_MSG: 'Você pode dizer olá para mim. Como posso te ajudar?',
            GOODBYE_MSG: 'Tchau!',
            REFLECTOR_MSG: 'Você acabou de ativar {{intentName}}',
            FALLBACK_MSG: 'Desculpe, não sei o que dizer. Por favor tente novamente.',
            ERROR_MSG: 'Desculpe, não consegui fazer o que você pediu. Por favor tente novamente.'
        }
    },
    hi: {
        translation: {
            WELCOME_MSG: 'नमस्ते, आप hello या help कह सकते हैं. आप क्या करना चाहेंगे?',
            HELLO_MSG: 'नमस्ते दुनिया ',
            HELP_MSG: 'आप मुझसे hello बोल सकते हो.',
            GOODBYE_MSG: 'अलविदा ',
            REFLECTOR_MSG: 'आपने {{intentName}} trigger किया हैं ',
            FALLBACK_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं ',
            ERROR_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं '
        }
    }
}