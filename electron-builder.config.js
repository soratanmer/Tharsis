/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    appId: 'com.Tharsis.app',
    productName: 'Tharsis',
    copyright: 'Copyright © 2021 Tharsis',
    asar: true,
    files: ['dist/main/**/*', 'dist/render/**/*'],
    publish: [
        {
            provider: 'github',
            owner: 'soratanmer',
            repo: 'Tharsis',
            vPrefixedTagName: true,
            releaseType: 'draft',
        },
    ],
    directories: {
        output: 'release/${version}',
    },
    npmRebuild: false,
    buildDependenciesFromSource: true,
    electronDownload: {
        mirror: 'https://npm.taobao.org/mirrors/electron/',
    },
    nsis: {
        oneClick: false,
        allowElevation: true,
        allowToChangeInstallationDirectory: true,
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
    },
}

module.exports = config
