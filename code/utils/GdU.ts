export const preLoadScene = async (runtimeGame: gdjs.RuntimeGame, sceneName: string) => {
    const runtimeGameAsAny = (runtimeGame as any);
    if (runtimeGameAsAny.areSceneAssetsReady && !runtimeGameAsAny.areSceneAssetsReady(sceneName)) {
        await runtimeGameAsAny.loadSceneAssets(sceneName);
    }
}