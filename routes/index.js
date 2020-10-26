var express = require('express');
const JavaScriptObfuscator = require('javascript-obfuscator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/obfuscate/:level', (req, res, next) => {
  try {
    let original_js = req.body.code;
    let level = req.params.level;
    let obfuscate_options = {};
    switch(parseInt(level)) {
      case 0: {
        obfuscate_options = {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          debugProtectionInterval: false,
          disableConsoleOutput: false,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          numbersToExpressions: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: false,
          shuffleStringArray: true,
          simplify: true,
          splitStrings: false,
          stringArray: true,
          stringArrayEncoding: [],
          stringArrayWrappersCount: 1,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersType: 'variable',
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false
        }
        break;
      }
      case 1: {
        obfuscate_options = {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          numbersToExpressions: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          shuffleStringArray: true,
          simplify: true,
          splitStrings: false,
          stringArray: true,
          stringArrayEncoding: [],
          stringArrayWrappersCount: 1,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersType: 'variable',
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false
        }
        break;
      }
      case 2: {
        obfuscate_options = {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          numbersToExpressions: true,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          shuffleStringArray: true,
          simplify: true,
          splitStrings: true,
          splitStringsChunkLength: 10,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayWrappersCount: 2,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersType: 'variable',
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: false
        }
        break;
      }
      case 3: {
        obfuscate_options = {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 1,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 1,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          numbersToExpressions: true,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          shuffleStringArray: true,
          simplify: true,
          splitStrings: true,
          splitStringsChunkLength: 5,
          stringArray: true,
          stringArrayEncoding: ['rc4'],
          stringArrayWrappersCount: 5,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersType: 'function',
          stringArrayThreshold: 1,
          transformObjectKeys: true,
          unicodeEscapeSequence: false
        }
        break;
      }
    }
    obfuscate_js = JavaScriptObfuscator.obfuscate(original_js, obfuscate_options);
    res.json({status: 'success', message: 'Se realizo la tarea con exito.', javascript: obfuscate_js._obfuscatedCode});
  } catch (err) {
    res.json({status: 'error', message: 'Algo fallo: ' + err, javascript: null});
  }
});

module.exports = router;
