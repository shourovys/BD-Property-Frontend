// build: Changes that affect how the project is built or its external dependencies (like updating libraries).
// ci: Changes connected to continuous integration systems, which help automate testing and deployment.
// docs: Updates to project documentation, like README files or guides.
// feat: Adding a completely new feature to the project
// fix: Correcting a bug or issue in the code.
// perf: Improvements made to enhance the project's performance.
// refactor: Rearranging or cleaning up code, without adding new features or fixing issues.
// revert: Going back to a previous version of the code.
// style: Changes that don't affect how the code functions, like formatting or spacing adjustments.

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-leading-blank': [1, 'always'],
      'body-max-line-length': [2, 'always', 100],
      'footer-leading-blank': [1, 'always'],
      'footer-max-line-length': [2, 'always', 100],
      'header-max-length': [2, 'always', 100],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-case': [
        2,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
      ],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'build',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'translation',
          'security',
          'changeset',
        ],
      ],
    },
  };