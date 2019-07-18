module.exports = function(plop) {
  const projectFolderName = 'Solitaire';
  const path = `../src/${projectFolderName}/{{folderName}}/{{fileName}}/{{fileName}}`;

  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'Please enter folder name',
        filter: folderName => {
          switch (folderName) {
            case 'comp':
              return 'components';
            default:
              return folderName;
          }
        }
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Please enter file name',
        filter: fileName => {
          const firstLetter = fileName.charAt(0).toUpperCase();
          return firstLetter + fileName.slice(1);
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${path}.jsx`,
        templateFile: 'templates/jsx.hbs'
      },
      {
        type: 'add',
        path: `${path}.module.sass`,
        templateFile: 'templates/sass.hbs'
      }
    ]
  });
};
