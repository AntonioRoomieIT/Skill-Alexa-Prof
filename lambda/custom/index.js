/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
// i18n library dependency, we use it below in a localisation interceptor
const i18n = require('i18next');
// i18n strings for all supported locales
const languageStrings = require('./languageStrings');

const urlImg='https://alexa-webhook-dev-serverlessdeploymentbucket-1gqqvdt3gn38n.s3.amazonaws.com/logo-profuturo.jpg';

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = `<speak>
        <lang xml:lang="es-MX">
        <p>
        Bienvenido a Profuturo.
        <break time="0.3s"/>
        Para nosotros la mejor inversión es  tu tranquilidad y la de tu familia.
        <break time="0.2s"/>
        </p>
        <p>
        Aquí puedes preguntarme cosas como :
        <break time="0.5s"/>
        ¿Qué es un Afore?,
        <break time="0.5s"/>
        ¿Cuales son los beneficios de Afore Profuturo?,
        <break time="0.5s"/>
        ¿Cómo puedo ser cliente?.
        </p>
        <break time="0.8s"/>
        <p>
        <prosody pitch="-10%">Dime<break time="0.25s"/> ¿Qué te gustaria saber?.</prosody>
        </p>
        </lang>
        </speak>  
        `;
        const TextToStandarCard="Para nosotros la mejor inversión es  tu tranquilidad y la de tu familia.\nAquí puedes preguntarme cosas como :\n¿Qué es una Afore?\n¿Cuales son los beneficios de tener tu Afore en Profuturo?\n¿Cómo ser cliente de Profuturo?";
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('Bienvenido a Profuturo.', TextToStandarCard,urlImg,urlImg)
            .getResponse();
    }
};
//WelcomeIntent
const WelcomeIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'WelcomeIntent';
    },
    handle(handlerInput) {
        const speakOutput = `<speak>
        <lang xml:lang="es-MX">
        <p>
        ¡Hola!
        <break time="0.3s"/>
        </p>
        <p>
        Puedes preguntarme cosas como :
        <break time="0.5s"/>
        ¿Qué es un Afore?,
        <break time="0.5s"/>
        ¿Cuales son los beneficios de Afore Profuturo?,
        <break time="0.5s"/>
        ¿Cómo puedo ser cliente?.
        </p>
        <break time="0.8s"/>
        <p>
        <prosody pitch="-10%">Dime<break time="0.25s"/> ¿Qué te gustaria saber?.</prosody>
        </p>
        </lang>
 </speak>`
 const TextToStandarCard="Puedes preguntarme cosas como :\n¿Qué es una Afore?\n¿Cuales son los beneficios de tener tu Afore en Profuturo?\n¿Cómo ser cliente de Profuturo?";    
    console.log("IN WELCOME");
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('Bienvenido a Profuturo.', TextToStandarCard,urlImg,urlImg)
            .getResponse();
    }
};
//graciasIntent
const graciasIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'graciasIntent';
    },
    handle(handlerInput) {
        const speakOutput = `    <p>
        Perfecto <break time="0.3s"/> voy a estar por aquí por cualquier cosa que puedas necesitar
    </p>
    <p>
         recuerda que puedes descargar nuestra aplicación la cual esta disponible en Google Play Store y App Store.
    </p>`;
        const TextToStandarCard='Recuerda que puedes descargar nuestra aplicación la cual esta disponible en Google Play Store y App Store.';
        console.log("IN graciasIntent");
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withStandardCard('¡Hasta pronto!', TextToStandarCard,urlImg,urlImg)
            .getResponse();
    }
};
//QueEsUnAforeIntent
const QueEsUnAforeIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsUnAforeIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('QUE_ES_UN_AFORE_MSG');
        console.log("IN QueEsUnAforeIntent");
        return handlerInput.responseBuilder
            .speak('<speak><lang xml:lang="es-MX">' + speakOutput + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('¿Que es un afore?', speakOutput,urlImg,urlImg)
            .getResponse();
    }
};
//ParaQueSirveUnAforeIntent
const ParaQueSirveUnAforeIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ParaQueSirveUnAforeIntent';
    },
    handle(handlerInput) {
        const speakOutput = `    <p>
        El objetivo de las afores, es hacerlas crecer para obtener el mejor retiro posible, asesorar y dar visibilidad al trabajador sobre el desempeño de su ahorro.  
       </p>
       <p>
       En Profuturo trabajamos para que el fruto de tu esfuerzo se convierta en un futuro prometedor y lleno de tranquilidad. 
       </p>
       <p>
       Acércate a nosotros y construyamos juntos el futuro que te mereces.
       </p>`;
        const TextToStandarCard='El objetivo de las afores, es hacerlas crecer para obtener el mejor retiro posible,asesorar y dar visibilidad al trabajador sobre el desempeño de su ahorro.\nEn Profuturo trabajamos para que el fruto de tu esfuerzo se convierta en un futuro prometedor y lleno de tranquilidad.\nAcércate a nosotros y construyamos juntos el futuro que te mereces.'
        console.log("IN ParaQueSirveUnAforeIntent");
        return handlerInput.responseBuilder
            .speak('<speak><lang xml:lang="es-MX">' + speakOutput + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('¿Para que sirve un afore?', TextToStandarCard, urlImg, urlImg)
            .getResponse();
    }
};
//QuienEsProfuturoIntent
const QuienEsProfuturoIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuienEsProfuturoIntent';
    },
    handle(handlerInput) {
        const speakOutput = `<p>
        Profuturo es la primera Afore que ofrece una aplicación móvil. 
        </p>
        <p>
        Con ella puedes consultar tus saldos y últimos estados de cuenta, leer noticias relevantes y hacer aportaciones voluntarias a tu fondo de ahorro
        </p>`;
        const TextToStandarCard= ' Profuturo es la primera Afore que ofrece una aplicación móvil.\nCon ella puedes consultar tus saldos y últimos estados de cuenta, leer noticias relevantes y hacer aportaciones voluntarias a tu fondo de ahorro\nDescargala desde Google Play Store y App Store.'
        console.log("IN QuienEsProfuturoIntent");
        return handlerInput.responseBuilder
            .speak('<speak><lang xml:lang="es-MX">' + speakOutput + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('¿Quien es Profuturo?', TextToStandarCard, urlImg, urlImg)
            .getResponse();
    }
};
// //AforeConProfuturoIntent
// const AforeConProfuturoIntentHandler = {
//     canHandle(handlerInput) {
//         console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
//         return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
//             && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AforeConProfuturoIntent';
//     },
//     handle(handlerInput) {
//         const speakOutput = handlerInput.t('AFORE_CON_PROFUTURO_MSG');
//         console.log("IN AforeConProfuturoIntent");
//         return handlerInput.responseBuilder
//             .speak('<speak><lang xml:lang="es-MX">' + speakOutput + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
//             .reprompt(handlerInput.t('GENERAL_REPROMPT'))
//             .withStandardCard('Cambia tu afore con profuturo.', speakOutput, urlImg, urlImg)
//             .getResponse();
//     }
// };
//VentajasAforeProfuturoIntent
const VentajasAforeProfuturoIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'VentajasAforeProfuturoIntent';
    },
    handle(handlerInput) {
        const speakOutput = `
        <p>
        <prosody volume="x-loud">Construyamos juntos 
        tu futuro ideal. </prosody>
        <break time="0.3s"/>
        En Profuturo, te damos herramientas pensadas en 
        tus necesidades, 
        <break time="0.2s"/>
        un servicio de calidad, y lo mas
        importante, la tranquilidad de un mejor futuro.
        </p>
        <break time="0.2s"/>
        <p>
        <prosody volume="x-loud">
        Te cuento porque somos tu mejor opción:"
        </prosody>
        </p>`;
        const ventaja1=`
        <p>
        <prosody volume="x-loud">
        Somos la institución por quinto año consecutivo,
        ofreciendo los mejores rendimientos del mercado.
        </prosody>
        </p>
      `;
        const ventaja2=`
        <p>
        <prosody volume="x-loud">
        Primer lugar en el Indicador de Servicio,
        otorgado por CONSAR por cuarto año consecutivo.
        </prosody>
        </p>
        `;
        const ventaja3=`
        <p>
        <prosody volume="x-loud">
        La CONDUSEF nos reconoció por nuestra alta 
        calidad en la atención a clientes.
        </prosody>
        </p>`;
        const TextToStandarCard='-Somos la institución por quinto año consecutivo,ofreciendo los mejores rendimientos del mercado.\n-Primer lugar en el Indicador de Servicio, otorgado por CONSAR por cuarto año consecutivo.\n-La CONDUSEF nos reconoció por nuestra alta calidad en la atención a clientes.';

        console.log("IN VentajasAforeProfuturoIntent");
        return handlerInput.responseBuilder
            .speak('<speak><lang xml:lang="es-MX">' + speakOutput+ventaja1+ventaja2+ventaja3 + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('Ventajas de tener tu afore con Profuturo.', TextToStandarCard, urlImg, urlImg)
            .getResponse();
    }
};
//QuieroSerClienteProfuturoIntent
const QuieroSerClienteProfuturoIntentHandler = {
    canHandle(handlerInput) {
        console.log(Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuieroSerClienteProfuturoIntent';
    },
    handle(handlerInput) {
        const speakOutput = `
        <p>
        <prosody rate="medium">
        Nuestro objetivo es claro.
        <break time="0.1s"/>
        Que el retiro sea la mejor etapa de tu vida.
        </prosody>
        <break time="0.3s"/>
        <prosody volume="loud">
        Conoce todo lo que tenemos preparado 
        para ti en profuturo.com.mx 
        <break time="0.3s"/>
        O Llámanos al 
        <break time="0.2s"/>
        <say-as interpret-as="telephone">
        5558096555
        </say-as>
        y construyamos juntos el futuro que mereces."
        </prosody>
        </p>
        `;
        const TextToStandarCard='Nuestro objetivo es claro.\nQue el retiro sea la mejor etapa de tu vida.\nConoce todo lo que tenemos preparado para ti en: \nwww.profuturo.com.mx\nO Llámanos al 5558096555 y construyamos juntos el futuro que mereces';
        console.log("IN QuieroSerClienteProfuturoIntent");
        return handlerInput.responseBuilder
        .speak('<speak><lang xml:lang="es-MX">' + speakOutput + '<break time="1s"/>' + handlerInput.t('PIVOT_MSG') + '</lang></speak>')
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .withStandardCard('¿Como ser cliente Profuturo?', TextToStandarCard, urlImg, urlImg)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('GOODBYE_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('FALLBACK_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', { intentName: intentName });

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('GENERAL_REPROMPT'))
            .getResponse();
    }
};
// This request interceptor will bind a translation function 't' to the handlerInput
const LocalisationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};
/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        WelcomeIntentHandler,
        graciasIntentHandler,
        QueEsUnAforeIntentHandler,
        ParaQueSirveUnAforeIntentHandler,
        QuienEsProfuturoIntentHandler,
        VentajasAforeProfuturoIntentHandler,
        QuieroSerClienteProfuturoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
