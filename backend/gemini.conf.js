module.exports = {
    // Specifica il tuo ambiente di test
    rootUrl: 'http://localhost:3000', // URL del tuo server locale
    gridUrl: 'http://localhost:4444/wd/hub', // URL del tuo Selenium Grid

    // Configurazione dei test
    suites: {
        // Definisci i tuoi test qui
        exampleSuite: {
            files: [
                'tests/example.test.js' // Percorso ai tuoi test
            ]
        }
    },

    // Configurazione dei browser
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    },

    // Opzioni di reporting
    reporters: [
        'console', // Stampa i risultati nella console
        {
            name: 'json',
            options: {
                path: 'reports' // Percorso per i report dei test
            }
        }
    ]
};