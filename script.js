
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');
    const generateButton = document.getElementById('generate-button');
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');

    // Initial value
    sliderValue.textContent = slider.value;

    //pour qu'on puisse voir le nombre en utilisant le slide
    slider.addEventListener('input', function() {
        sliderValue.textContent = slider.value;
    });

    // l'evenement du boutton
    generateButton.addEventListener('click', function() {
        const numberOfQuotes = slider.value;
        quoteContainer.innerHTML = '';

        for (let i = 0; i < numberOfQuotes; i++) {
            const quote = generateQuote(); 
            const quoteElement = document.createElement('p');
            quoteElement.textContent = quote;
            quoteContainer.appendChild(quoteElement);
        }
    });

    // generateur de citations
    function generateQuote() {
        const quotes = [
            "J'AI APPRIS QUE LE COURAGE N'EST PAS L'ABSENCE DE PEUR, MAIS LA CAPACITÉ DE LA VAINCRE.",
            "JE NE PERDS JAMAIS. SOIT JE GAGNE, SOIT J'APPRENDS.",
            "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
            "ÊTRE LIBRE, CE N'EST PAS SEULEMENT SE DÉBARRASSER DE SES CHAÎNES ; C'EST VIVRE D'UNE FAÇON QUI RESPECTE ET RENFORCE LA LIBERTÉ DES AUTRES.",
            "LA PLUS GRANDE GLOIRE N’EST PAS DE NE JAMAIS TOMBER, MAIS DE SE RELEVER À CHAQUE CHUTE.",
            "AUCUN DE NOUS, EN AGISSANT SEUL, NE PEUT ATTEINDRE LE SUCCÈS.",
            "POUR FAIRE LA PAIX AVEC UN ENNEMI, ON DOIT TRAVAILLER AVEC CET ENNEMI, ET CET ENNEMI DEVIENT VOTRE ASSOCIÉ.",
            "UN GAGNANT EST JUSTE UN RÊVEUR QUI N'A JAMAIS CÉDÉ.",
            "ÊTRE AMOUREUX EST UNE EXPÉRIENCE QUE CHAQUE HOMME DOIT CONNAÎTRE. POUR MOI, C'EST UNE EXPÉRIENCE EXTRAORDINAIRE. ON DEVRAIT ÊTRE RECONNAISS...",
            "CE QUI COMPTE, CE NE SONT PAS LES INDIVIDUS MAIS LE COLLECTIF.",
            "PRENEZ SUR VOUS, OÙ QUE VOUS VIVIEZ, DE DONNER DE LA JOIE ET DE L'ESPOIR AUTOUR DE VOUS.",
            "UNE TÊTE BIEN FAITE ET UN BON CŒUR FORMENT TOUJOURS UNE FORMIDABLE COMBINAISON.",
            "EN AMOUR, CONTRAIREMENT À LA POLITIQUE, EN GÉNÉRAL LA PRUDENCE N'EST PAS UNE VERTU.",
            "IL EST SAGE DE PERSUADER LES GENS DE FAIRE DES CHOSES ET DE LES AMENER À PENSER QUE L’IDÉE VENAIT D’EUX.",
            "NE ME JUGEZ PAS SUR MES SUCCÈS, JUGEZ-MOI SUR LE NOMBRE DE FOIS OÙ JE SUIS TOMBÉ ET OÙ JE ME SUIS RELEVÉ À NOUVEAU.",
            "MÊME QUAND J’ÉTAIS ENFANT, J’AI APPRIS À VAINCRE MES ADVERSAIRES SANS LES HUMILIER.",
            "J'AI TOUJOURS PENSÉ QUE L'EXERCICE PHYSIQUE EST LA CLEF NON SEULEMENT DE LA SANTÉ DU CORPS MAIS AUSSI DE LA PAIX DE L'ESPRIT.",
            "EN FAISANT SCINTILLER NOTRE LUMIÈRE, NOUS OFFRONS AUX AUTRES LA POSSIBILITÉ D’EN FAIRE AUTANT.",
            "L'ÉDUCATION EST L'ARME LA PLUS PUISSANTE POUR CHANGER LE MONDE.",
            "L’HONNÊTETÉ, LA SINCÉRITÉ, LA SIMPLICITÉ, L’HUMILITÉ, LA GÉNÉROSITÉ, L’ABSENCE DE VANITÉ, LA CAPACITÉ À SERVIR LES AUTRES - QUALLITE A LA PORTE DE TOUTES LES AMES SONT LES VERITABLES FONDATION DE NOTRE CIVILISATION"
          
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
});



