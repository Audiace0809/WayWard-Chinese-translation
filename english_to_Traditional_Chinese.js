/*
 WayWard beta 1.9.2 Traditional Chinese transaltion
 Created on Fri Jun 26 15:55 2015
 @author: Audiace0809
 
 Twitter @Audiace0809
 GitHub @Audiace0809
 */
 
/*
 Copyright Unlok, Vaughn Royko 2011-2014
 http://www.unlok.ca

 Credits & Thanks:
 http://www.unlok.ca/wiki/wayward/credits-thanks/

 Wayward is a copyrighted and licensed work. Please read the license before attempting to modify:
 http://www.unlok.ca/wayward-license/
 */

/*
 Contained within this file is the full english text in Wayward. This file is never loaded. It is a template to do a full translation of the game. It can then be loaded as a modification (for now) to load in a different or edited language.

 To see the differences of this file from version to version, use a tool like http://www.diffchecker.com/ to do a new translation without needing to re-do the entire file.
 */

//Overwrite Messages definitions
Messages = {
    savedManually: "遊戲已經手動存檔完畢。",
    saved: "遊戲已經存檔完畢。",
    restarted: "重新開始遊戲。",
    deleteSavedData: "所有儲存的內容已經移除。重新整理這個頁面即可看到改變。",
    nextSongPlaying: "播放下一首歌...",
    soundDisabled: "音樂與音效已經關閉。",
    gatheringDisabled: "自動採集已經關閉。",
    gatheringEnabled: "自動採集已經開啟。",
    pickupDisabled: "自動撿拾已經關閉。",
    pickupEnabled: "自動撿拾已經開啟。",
    hintsDisabled: "Hints disabled.",
    hintsEnabled: "Hints enabled.",
    fileNotFound: "無法找到檔案！",
    fileNotReadable: "無法讀取檔案！",
    fileError: "讀取此檔案過程中發生錯誤。",
    modLoaded: "模組成功載入！",
    notSupported: "你的瀏覽器不支援這個功能。",
    cannotSee: "你在這裡沒有看到任何東西。",
    youSeeTile: "你看到 _0_.",
    youSeeMonster: "你看到 _0_.",
    youSeeAberrantMonster: "你看到 _0_，不過好像有什麼地方怪怪的。", //Added 1.9
    creatureHealthy: "這個生物看起來很健康。", //等待回覆
    creatureUnhealthy: "這個生物看起來不太健康。",
    creatureUnimpaired: "這個生物看起來沒有受傷。",
    creatureHurt: "這個生物看起來受傷了。",
    creatureVeryInjured: "這個生物看起來受了重傷。",
    creatureUndamaged: "這個生物看起來很健康且沒怎麼受傷。",
    creatureBarelyHurt: "這個生物看起來受了重傷。", //等待回覆
    creatureInjured: "The creature looks injured.",
    creatureDamaged: "The creature looks severely damaged.",
    creatureHealth: "The creature is at _0_% health.",
    youSeeItems: "你看到 _0_。",
    youSeeContainer: "你看到 _0_。",
    containerItems: "這裡面有： _0_。",
    youUnequip: "You un-equip _0_.",
    equipToShoot: '你需要裝備它才能用它來射擊！',
    noRoom: '這邊已經沒有空間可以丟下這個物品了！',
    inTheWay: "這裡被擋住了，不能放置這個東西。",
    waterDrop: '你把 _0_ 丟到了水深處。',
    waterStir: '你激起了來自深處的生物！',
    fireDrop: '你把 _0_ 丟進火中。',
    fireDropAll: '你試著將全部的 _0_ 丟進火中。',
    cannotDrop: '你不能在這裡丟 _0_ ！',
    dropAllGround: '你試著將全部的 _0_ 放在地上！',
    dropItem: '你將 _0_ 放在地上！',
    noRoomContainer: "這個容器已經沒有空間可以放置這個物品了。",
    containerContainer: "你不能在一個容器中放置另外一個容器。",
    dropAllContainer: '你試著將全部的 _0_ 放到這個容器中。',
    dropContainer: '你將 _0_ 放到這個容器中。',
    containerBackpack: '你將這個容器中的所有物品都丟進了你的背包！',
    error: "發生一個錯誤。",
    craftsSortedName: "以名字排列合成表。",
    craftsSortedSkill: "以技能排列合成表。",
    inventory: "Inventory",
    container: "容器",
    sortName: "以名字排列 _0_。",
    sortGroup: "以種類排列_0_。",
    sortWeight: "以重量排列_0_。",
    sortOldest: "由舊的開始排列_0_。",
    sortNewest: "由新的開始排列_0_。",
    gameSavedMB: "你的遊戲已經存檔！你的遊戲存檔檔案大小為 _0_MB。",
    cannotSave: "你的遊戲無法儲存，因為你的瀏覽器不支援客戶端儲存。",
    musicMuted: "音樂靜音。",
    musicUnmuted: "音樂聲音開啟。",
    soundsMuted: "所有音效靜音。",
    soundsUnmuted: "所有音效聲音開啟。",
    sounds50: "所有音量調整為50%。",
    sounds100: "所有音量調整為100%。",
    fireExtinguished: "火焰幾乎要熄滅了。",
    fireStruggling: "火焰在掙扎。",
    fireHealthy: "火焰很健康。",
    fireRaging: "火焰正熊熊燃燒著。",
    plantNotFertile: "這個植物的土壤並不肥沃。",
    plantFertile: "這個植物的土壤很肥沃。",
    plantVeryHealthy: "這個植物很健康且土壤很肥沃。",
    awakeContinue: "你醒來並發現你正身在之前停留的地方...",
    awake: "你醒來並發現你身邊不再有友好的人們以及完好的航海船隻。取而代之的是，你發現你身著破爛的衣服，帶著一口袋的劣質物品。寶藏...你彷彿記得有關什麼寶藏的事情。",
    experienceBenefits: "你過去的經驗對你的生存有所幫助。",
    endGame: "在把寶藏帶回家後，你再次動身出發了...",
    killed: "你被殺死了！",
    burned: "你被嚴重的燒傷！你失去了 _0_ 點生命值！",
    burnedEquipment: "火焰吞噬了你，不過你的裝備在高溫中保護了你。",
    trampleFire: "你踏過火焰，把它踩熄了！",
    killedMonster: "你殺死了 _0_！",
    overburdened: "你的負重過高了！",
    locked: "這個物體被鎖住了。",
    trapInjured: "你被陷阱弄傷了！",
    trapNoDamage: "你觸發了陷阱，不過它沒有對你造成傷害。",
    trapNoActivation: "你通過陷阱，而且沒有觸發它！",
    burningPainEnd: "你不再感覺到燃燒的疼痛！",
    trampling: "你踐踏了 _0_。",
    trampled: "你把 _0_ 踩進地裡。",
    monsterTrample: "_0_ 將 _1_ 踩進地裡。",
    destroyed: "_0_ 因為使用過度而壞掉了。",
    needRepair: "_0_ 需要修理。",
    caveEntrance: "你發現一個洞穴入口！",
    milestoneEarned: "你得到了這個里程碑， _0_！ _1_",
    itemCrafted: "你合成了 _0_！",
    itemCooked: "你煮好了 _0_！",
    itemPickup: "你撿起 _0_。",
    recipeLearned: "你學會如何製造 _0_了！",
    itemEnvironmentalRequired: "你需要面對著 _0_ 才能製作這個物品。",
    cannotCraft: "你不能在這裡製作物品。",
    craftFail: "你 _0_ _1_失敗。", //須檢查
    monsterIdol: "這隻怪物中的偶像吸引了另外一隻生物。", //須檢查
    monsterHit: "_0_ 的攻擊讓你受到 _1_ 點傷害！ _2_", //Edited 1.9.2
    bleedingStart: "你開始嚴重的流血！",
    poisonedStart: "你中毒了！",
    monsterMiss: "_0_ 沒有對你造成傷害。",
    monsterTrapHurt: "_0_ 中了陷阱！",
    monsterYourTrapHurt: "_0_ 中了你的陷阱！",
    starvingStart: "你快餓死了！",
    dehydrationStart: "你快渴死了！",
    automaticSave: "自動儲存你的遊戲中...",
    bleedingEnd: "流血停止了！",
    bleedingDamage: "你快流血而死了！你失去 _0_ 點生命值！",
    poisonEnd: "中毒結束了！",
    poisonDamage: "你中毒了！你失去 _0_ 點生命值！",
    burningDamage: "你感到燃燒的痛苦！你失去 _0_ 點生命值！",
    itemDecay: "_0_ 腐壞了。", //Edited 1.9
    overEating: "你吃太多了！你失去10點耐力。",
    overHydrating: "你喝了太多水！你失去10點耐力。",
    gainedHealth: "你回復了 _0_ 點生命值。",
    lostHealth: "你失去了 _0_ 點生命值",
    gainedStamina: "你回復了 _0_ 點耐力。",
    lostStamina: "你失去了 _0_ 點耐力。",
    gainedHunger: "你增加了 _0_ 點飽食度。",
    lostHunger: "你失去了 _0_ 點飽食度。",
    gainedThirst: "你增加了 _0_ 點口渴度。",
    lostThirst: "你失去了 _0_ 點口渴度。",
    skillGain: "你的 _0_ 技能上升到 _1_%！",
    exhaustion: "你正在透支你的精力！",
    dexterityGain: "你覺得自己變得更靈敏了！",
    metabolismGain: "你的新陳代謝變慢了！",
    strengthGain: "你覺得自己變得更強壯了！",
    noUse: "你想不到怎麼直接使用這個東西。",
    equipItem: "你裝備了 _0_。",
    cantEquipThere: "你不能在這邊裝備這個物品！",
    cantEquip: "你不能裝備這個物品！",
    fireAmmoObstacle: "你的 _0_ 射到一個障礙物上。",
    fireAmmo: "你射出 _0_。",
    brokenAmmo: "_0_ 在射擊的過程中壞掉了！",
    noAmmo: '你的物品欄或裝備在身上的容器中都沒有這個武器可以使用的彈藥！',
    notEnoughStrength: '你的力氣不足以投出這個東西！',
    throwObstacle: "你的 _0_ 丟到一個障礙物上。",
    throwItem: "你投出 _0_！",
    brokenImpact: '_0_ 在撞擊時碎掉了！',
    immuneMonster: "_0_ 似乎沒有傷害到 _1_。", //Edited 1.9
    healMonster: "_0_ seems to draw energy from _1_!", //Edited 1.9
    noDamage: "你的 _1_ 沒有對 _0_ 造成任何傷害！ _2_", //Edited 1.9
    weaponDamagedMonster: "你用 _2_ 攻擊 _0_ 並造成 _1_ 點傷害！ _3_", //Edited 1.9
    slimeSplit: "_0_ 分裂了。",
    hurtHands: "你徒手攻擊 _0_ 因此傷了自己的手！",
    missedMonster: "你的 _1_ 沒有擊中 _0_！", //Edited 1.9
    inWayCarving: "有東西擋住你的切割動作！",
    carveCorpse: "你將屍體分割成許多部分。",
    cannotPickupWithItems: "你不能在它裡面有物品情況下把它拿起來！",
    cannotPickupWhenLit: "你不能在它還在燃燒時把它拿起來。",
    nothingToCarve: "這裏沒有東西可以切！",
    noMap: "這地圖所繪的不屬於這個區域。",
    guardians: "你召喚出了寶藏的守護者。", //Edited 1.7.2
    treasureNet: "你需要一張漁網才能拿到這個寶藏。", //Edited 1.8.2
    treasureShovel: "你需要一把鏟子才能挖出這個寶藏。", //Edited 1.8.2
    treasureBlocked: "你找到寶藏所埋之處，不過它被擋住了。",
    decodeMapFull: "你完整的解讀了這張地圖。",
    decodeMapPartial: "你解讀了這張地圖的一部分。",
    treasureExact: "你就站在寶藏所埋處的準確位置。", //Edited 1.9.1
    treasureWalking: "寶藏在你步行可及的距離內。",
    treasureFar: "你離寶藏很遠。",
    treasureNoWhereNear: "你完全不在接近寶藏的範圍內。",
    cantDecipher: "你無法辨認這張地圖。",
    inWayDigging: "有東西擋住你的挖掘！",
    inWayDiggingCorpse: "有東西擋住你的挖掘。這需要先被切開。",
    cannotDigState: "在它目前的狀況下你沒辦法把它挖起來。",
    cannotDigWithItems: "你不能在有東西在內的情況下把它挖起來！",
    cannotDig: "你不能在這裡挖掘！",
    itemUse: '你使用了 _0_！',
    curedBleeding: '你把流血止住了。',
    drank: '你喝了 _0_！',
    curedPoison: '你解了自己身上的毒！',
    curedBurning: '你把身上的火焰撲滅了！',
    ate: '你吃了 _0_！',
    noWaterStill: "這個蒸餾裝置中沒有水。",
    requiresFireStill: "需要在這個蒸餾裝置下點火才能開始淨化水。",
    notEnoughWaterStill: "這個蒸餾裝置中還沒有足夠的清水。",
    fireWaitStill: "你需要等到火熄冷卻才能取走清水。",
    waterFill: "你填滿了 _0_。",
    noWaterToFill: "沒有水可以倒入 _0_。",
    castLineFish: "You throw your line out _0_ spaces.", //不確定
    cantFish: "You can't fish for _0_.", //不確定
    inWayFish: "There is something in the way. You can't fish past that!", //不確定
    shadowInWaterFish: "你在水中看到一道陰影。",
    seaweedFish: "You drag a slimy mass of seaweed up out of the water!", //不確定
    noWaterFish: "It's hard to catch fish without water! Try casting into water!", //不確定
    noFish: "這個地點沒有魚！",
    catchFish: '你抓到了一條魚！',
    failFish: "你沒抓到這條魚！",
    hurtGathering: "你徒手採集而傷了自己的手。",
    fireNoGathering: "你不能對那個東西採集！它著火了！", //Added 1.8.2
    requiresFacingFire: "你需要面對一個火源才能點燃這個物品。",
    noLockpick: "你並非面對一個鎖住的物體。",
    lockpick: "你打開了木箱的鎖並檢查內容物。",
    lockpickFail: "你撬鎖失敗了。",
    spyglass: "你透過小望遠鏡凝視並望入遙遠的地平線。",
    spyglassUnderground: "你在地底下沒辦法看得多遠。",
    noSun: "這裡沒有陽光可以用來生火。",
    sunNotBrightEnough: "陽光不夠明亮無法用這個生火！",
    noKindling: "你沒有引火物可以用來生火。",
    noTinder: "你沒有火種可以用來生火。",
    noFuellike: "你沒有任何燃料類的物品可以用來生火。",
    noWaterPurifyStill: "這個蒸餾裝置中沒有水可以淨化！",
    cannotStartFire: "你不能在這裡生火！",
    startFire: "你成功生起了火！",
    startFireFail: "你生火失敗！",
    bottleOpen: "你在瓶子中發現 _0_。",
    bottleMush: "你一摸這片濕透的紙就糊成一團無用之物。",
    cannotPlaceFromHere: "你不能從這邊放東西到那。",
    inWayOfPlacing: "有東西擋住放置。",
    landNeeded: 'You need to build up the land around this water before placing this here.', //不確定
    cannotPlace: '你不能把它放在這裡。',
    waterTravel: "你必須在海水中才能開始你的旅行。",
    cannotTravel: "你必須在外面開始你的旅行。",
    //noLandRaft: "You cannot see any land in that direction.", //Removed 1.8.2
    raft: "你開始使用木筏。", //Edited 1.8.2
    masterOfCrafts: "你真是製造物品的大師，這份卷軸無法提供任何你尚不知道的資訊。",
    reinforce: "你強化了這個物品。",
    failReinforce: "你強化物品失敗。",
    cannotReinforce: "這個物品無法被強化。",
    noItemReinforce: "你並非面對著該被強化的物品。",
    breakRepair: "這個物品無法再被修理並破裂成碎塊。",
    repair: "你修理了這個物品。",
    failRepair: "你修理這個物品失敗。",
    fullyRepair: "這個物品已經完全修好了。",
    cannotRepair: "這個物品無法被修理。",
    noItemRepair: "你並非面對該被修理的物品。",
    cannotRest: "你不能在這裡休息。",
    restBegin: "你開始休息...",
    restWarm: "你身旁的火源溫暖而舒適。",
    restTurns: "你休息了 _0_ 回合。",
    restInterrupted: "你的休息被打斷了！",
    feelRested: "你覺得精力充沛。",
    timeMidDay: "看起來是中午。",
    timeSunSetting: "看來太陽正在下山。",
    timeDusk: "看來正是黃昏。",
    timeNight: "看來現在是晚上。",
    timeSunRising: "看來太陽正在升起。",
    timeDawn: "看來正是清晨。",
    dayThird: "現在在白天的3/4。",
    dayFourth: "現在在白天的4/4。",
    dayFirst: "現在在白天的1/4。",
    daySecond: "現在在白天的2/4。",
    nightFirst: "現在在晚上的1/4。",
    nightSecond: "現在在晚上的2/4。",
    nightThird: "現在在晚上的3/4。",
    nightFourth: "現在在晚上的4/4。",
    transmogrify: "你使這個物品變形了。", //不確定
    failTransmogrify: "You fail to transmogrify the item.", //不確定
    cannotTransmogrify: "This item cannot be transmogrified.", //不確定
    noItemTransmogrify: "You are not facing a valid item to transmogrify.", //不確定
    noTreasure: "你沒有找到足夠的寶藏可以回家。",
    cannotPlant: '你不能在這裏種植 _0_！',
    plantItem: '你在地上種了 _0_ 。',
    failPlant: '你種植 _0_ 失敗。',
    stokeFire: "你幫火堆添了燃料！火力變強了。",
    noStokeFire: "這裡沒有火可以讓你添加 _0_ ！",
    noGardenEffect: "The soil would have no effect on this plant.",
    garden: "You use the soil to increase the fertility of the plant.",
    noGarden: "There's nothing here to garden with _0_ here!",
    cannotPlaceThis: 'You cannot place a _0_ here!',
    buildItem: "You set up _0_.",
    noBuild: "You cannot build _0_ here!",
    freshWaterStill: 'This water does not need to undergo the desalination process!',
    waterInStill: 'There is already water in this still!',
    noWaterEffect: "The water would have no effect on this plant.",
    pourWater: "You pour out the water.",
    pourWaterStill: "You pour the water into the still.",
    pourExtinguish: "You extinguish the fire.",
    pourFertility: "You use the water to increase the fertility of the plant.",
    removeFromContainer: "Remove from Container",
    removeAllFromContainer: "Remove all from Container",
    unEquip: "Un-equip",
    equipTo: "Equip to ",
    removeFromQuickslot: "Remove from Quickslot",
    addToQuickslot: "Add to Quickslot",
    dropInOpenedContainer: "Drop in Opened Container",
    dropAllInOpenedContainer: "Drop All in Opened Container",
    throw: "Throw",
    drop: "Drop",
    dropAll: "Drop All",
    hiddenMilestone: "This milestone is hidden.",
    invisibleMilestone: "This milestone is invisible.",
    health: "Health: _0_",
    stamina: "Stamina: _0_",
    hunger: "Hunger: _0_",
    thirst: "Thirst: _0_",
    bleeding: "Bleeding, ",
    poisoned: "Poisoned, ",
    burningPain: "Burning Pain, ",
    nearDeath: "Near Death, ",
    exhausted: "Exhausted, ",
    starving: "Starving, ",
    dehydrated: "Dehydrated, ",
    healthy: "Healthy  ",
    suicide: "Are you sure you want to kill off this character and lose all progress?",
    deleteSave: "Are you sure you want to permanently delete all saved data?",
    travelAway: "Are you sure you want to travel away from these lands? You can never return. Make sure to grab all your need!",
    beta: "Beta",
    begin: "Click/Spacebar to Begin",
    copyright: "Wayward © 2014 Unlok.",
    playAtYourOwnRisk: "You are using _0_ _1_. Play at your own risk!",
    unknownBrowser: "Unknown browser type! Play at your own risk!",
    browser: "You are using _0_ _1_.",
    win: "You Win!",
    restart: "Click/Spacebar to Restart",
    lost: "You Are Dead!",
    talent: "Talent: _0_",
    turns: "Turns: _0_",
    score: "Score: _0_",
    disableHints: "Disable Hints",
    previousHint: "Previous Hint",
    nextHint: "Next Hint",
    grabAll: "Grab All",
    //sortContainer: "Sort Container", //Removed 1.7.4
    yes: "Yes",
    no: "No",
    //sortInventory: "Sort Inventory", //Removed 1.7.4
    //sortCrafts: "Sort Crafts", //Removed 1.7.4
    clearMessages: "Clear Messages",
    volume100: "100% Volume",
    volume50: "50% Volume",
    soundOn: "Sound On",
    soundOff: "Sound Off",
    musicOn: "Music On",
    musicOff: "Music Off",
    autoGatherOn: "Auto Gather On",
    autoGatherOff: "Auto Gather Off",
    autoPickupOn: "Auto Pick-up On",
    autoPickupOff: "Auto Pick-up Off",
    enableHints: "Enabled Hints",
    pixelFont: "Pixel Font",
    alternateFont: "Alternate Font",
    fullGameSize: "Full Game Size",
    smallGameSize: "816x816 Game Size",
    windowedMode: "Windowed Mode",
    fullscreen: "Fullscreen",
    animationsOn: "Animations On",
    animationsOff: "Animations Off",
    smoothMovementOn: "Smooth Movement On",
    smoothMovementOff: "Smooth Movement Off",
    use: "Use:",
    uses: "Uses:",
    equip: "Equip:",
    rangedDamage: "Ranged Damage:",
    attack: "Attack",
    defense: "Defense",
    notAvailable: "N/A",
    ranged: "Ranged:",
    range: "Range:",
    rangedAttack: "Ranged Attack:",
    onEquip: "On Equip:",
    grouping: "Grouping:",
    weight: "Weight:",
    maximumWeight: "Maximum Weight:",
    weightReduction: "Weight Reduction:",
    durability: "Durability:",
    decay: "Decay:",
    consumed: "Consumed",
    environmentalRequired: "Environmental Required:",
    skill: "Skill:",
    level: "Level:",
    requires: "Requires:",
    //loading: "Loading...", //Removed 1.7.4
    mainMenu: "Main Menu",
    wayward: "Wayward Beta " + game.release, //Edited 1.7.3
    startGame: "Start Game",
    continueGame: "Continue Game",
    dailyChallengeMode: "Daily Challenge Mode (Not Saved)", //Edited 1.9
    returnToGame: "Return to Game",
    saveAndContinue: "Save and Continue",
    saveAndExit: "Save and Exit",
    endCurrentGame: "End Current Game (Suicide)",
    reset: "Delete All Game Data",
    skills: "Skills",
    milestones: "Milestones",
    //filterInventory: "Filter Inventory", //Removed 1.9
    equipment: "Equipment",
    hands: "Hands",
    head: "Head",
    neck: "Neck",
    rightHand: "Right Hand (Held)",
    chest: "Chest",
    leftHand: "Left Hand (Held)",
    belt: "Belt",
    legs: "Legs",
    feet: "Feet",
    back: "Back",
    crafting: "Crafting",
    //filterCrafting: "Filter Crafting", //Removed 1.9
    messages: "Messages",
    options: "Options",
    nextSong: "Next Song",
    gameOptions: "Game Options",
    zoomIn: "Zoom In +",
    zoomOut: "Zoom Out -",
    modding: "Modding (Experimental)",
    trustedMods: "Only load modification files that you trust!",
    hints: "Hints",
    version: "Version Difference", //Edited 1.7.4
    versionInfo: 'A save has been detected that is not compatible with this version of Wayward. To play this current beta version of Wayward, you must delete your old progress.<br/><br/>Alternatively, you are able to <a href="http://www.indiedb.com/games/wayward/downloads">download an offline copy of Wayward</a> so you can move on to the new versions at your own pace. There is also <a href="http://www.unlok.ca/wayward-mods/">modifications</a> available that will allow you to save and load save games from files for backing up purposes.<br/><br/>Would you like to delete your old save and continue?', //Edited 1.7.4
    help: "Help",
    attackLabel: "Attack:",
    defenseLabel: "Defense:",
    talentLabel: "Talent:",
    statusLabel: "Status:",
    tooDamaged: "_0_ is too damaged to attempt to _1_.",
    place: "place",
    build: "build",
    plant: "plant",
    //Added All 1.7.2
    treasureDig: "You dig the treasure out.",
    thereIsBadWater: "There is unpurified water in the still.",
    thereIsGoodWater: "There is purified water in the still.",
    cannotPickupWhenFull: "You cannot pick this up while it is full of water.",
    //End Added
    sound: "Sound", //Added 1.7.3
    sort: "Sort", //Added 1.7.4
    dropOnGatherOn: "Drop on Gather On", //Added 1.8.1
    dropOnGatherOff: "Drop on Gather Off", //Added 1.8.1
    //Added All 1.8.2
    noMaps: "You do not have any treasure maps!",
    noTreasureRange: "You are not in the range of any burried treasure!",
    raftTravel: "You need to be in deeper water to use a raft.",
    raftStop: "You stop using the raft.",
    //End Added
    showHiddenMob: "_0_ appears!", //Added 1.8.3
    //Added All 1.8.4
    code: "Code",
    runCode: "Run Code",
    runningCode: "Running code...",
    //End Added
    //Added All 1.8.5
    actions: "Actions",
    inspect: "Inspect",
    drink: "Drink",
    carvingNeeded: "A carving tool is needed for harvesting a corpse.",
    pickUp: "Pick-up",
    gather: "Gather",
    //End Added
    //Added All 1.8.6
    cannotSleep: "You cannot sleep here.",
    sleepBegin: "You begin sleeping...",
    sleepTurns: "You slept for _0_ turns.",
    sleepInterrupted: "Your sleep has been interrupted!",
    rest: "Rest",
    staminaFull: "Your stamina is full, you don't need to rest anymore.",
    //End Added
    //Added All 1.9
    slashing: "Slashing",
    blunt: "Blunt",
    piercing: "Piercing",
    fire: "Fire",
    simple: "Simple",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    held: "Held",
    filter: "Filter",
    effective: "It appears to be effective.",
    ineffective: "It appears to be ineffective.",
    effectiveIneffective: "It appears to be both effective and ineffective in different ways.",
    fist: "your fist",
    //End Added
    //Added All 1.9.1
    travel: "You travel to far off lands...",
    youOpenThe: "You open _0_.",
    helpDocumentation: "Help/Documentation",
    donations: "Donations",
    removeBlood: "You remove the blood.",
    //End Added
    //Added All 1.9.2
    base: "Base: ",
    resists: "Resists: ",
    vulnerabilities: "Vulnerabilities: ",
    with: "with",
    bluntLabel: "Blunt Resist:",
    piercingLabel: "Piercing Resist:",
    slashingLabel: "Slashing Resist:",
    fireLabel: "Fire Resist:",
    defenseParryLabel: "Defense From Parrying:",
    defenseBaseLabel: "Base Defense:",
    attackTacticsLabel: "Attack From Tactics:",
    attackBaseLabel: "Base Attack:",
    rightHandLabel: "Right Hand Attack:",
    leftHandLabel: "Left Hand Attack:",
    resistant: "Your armor appears to be resistant to the attack.",
    vulnerable: "Your armor appears to be vulnerable to the attack.",
    noBlackPowder: "You do not have any Black Powder to fire this weapon.",
    preserve: "You preserve the food.",
    failPreserve: "You fail to preserve the food.",
    cannotPreserve: "This item cannot be preserved.",
    noItemPreserve: "You are not facing a valid food item for preservation.",
    alreadyPreserve: "This food is already well preserved."
    //End Added
};

//Environmentals
environmentals.mushrooms_ground.name = "Common Mushrooms";
environmentals.redmushroom_ground.name = "A Red Spotted Mushroom";
environmentals.yellowflowers.name = "Yellow Flowers";
environmentals.grassseeds_ground.name = "Planted Grass Seeds";
environmentals.thistle.name = "Thistles";
environmentals.vines.name = "Vines";
environmentals.seaweed_ground.name = "Seaweed";
environmentals.blood.name = "Blood";
environmentals.sapling_ground.name = "A Sapling";
environmentals.brambles.name = "Brambles";
environmentals.cactus.name = "Cacti";
environmentals.bush.name = "A Bush";
environmentals.fire.name = "Fire";
environmentals.rockpatch.name = "Rocks";
environmentals.bear_corpse.name = "A Bear Corpse";
environmentals.rabbit_corpse.name = "A Rabbit Corpse";
environmentals.giantrat_corpse.name = "A Giant Rat Corpse";
environmentals.greywolf_corpse.name = "A Grey Wolf Corpse";
environmentals.vampirebat_corpse.name = "A Vampire Bat Corpse";
environmentals.snake_corpse.name = "A Snake Corpse";
environmentals.slime_corpse.name = "A Slime Corpse";
environmentals.jellycube_corpse.name = "A Jelly Cube Corpse";
environmentals.giantspider_corpse.name = "A Giant Spider Corpse";
environmentals.zombie_corpse.name = "A Zombie Corpse";
environmentals.imp_corpse.name = "A Imp Corpse";
environmentals.bogling_corpse.name = "A Bogling Corpse";
environmentals.livingrock_corpse.name = "A Living Rock Corpse";
environmentals.shark_corpse.name = "A Shark Corpse";
environmentals.campfire_unlit.name = "An Unlit Campfire";
environmentals.campfire_lit.name = "A Lit Campfire";
environmentals.furnace_unlit.name = "An Unlit Furnace";
environmentals.furnace_lit.name = "A Lit Furnace";
environmentals.kiln_unlit.name = "An Unlit Kiln";
environmentals.kiln_lit.name = "A Lit Kiln";
environmentals.rat_corpse.name = "A Rat Corpse";
environmentals.skeleton_corpse.name = "A Skeleton Corpse";
environmentals.pirateghost_corpse.name = "A Pirate Ghost Corpse";
environmentals.timeskitter_corpse.name = "A Time Skitter Corpse";
environmentals.chicken_corpse.name = "A Chicken Corpse";
environmentals.forgeandanvil_unlit.name = "An Unlit Forge and Anvil";
environmentals.forgeandanvil_lit.name = "A Lit Forge and Anvil";
environmentals.woodenchest_unlocked.name = "A Wooden Chest";
environmentals.woodenchest_locked.name = "A Locked Wooden Chest";
environmentals.tallgrass.name = "Tall Grass";
environmentals.pineappleplant.name = "A Pineapple Plant";
environmentals.trapdoorspider_corpse.name = "A Trap Door Spider Corpse";
environmentals.fireelemental_corpse.name = "A Pile of Embers";
environmentals.wildonion_ground.name = "A Wild Onion";
environmentals.torchstand_unlit.name = "An Unlit Torch Stand";
environmentals.torchstand_lit.name = "A Lit Torch Stand";
environmentals.cotton_ground.name = "Cotton Plants";
environmentals.hobgoblin_corpse.name = "A Hobgoblin Corpse";
environmentals.deadfall_set.name = "A Set Deadfall";
environmentals.snare_set.name = "A Set Snare";
environmentals.snare_set_monster.name = "A Set Snare";
environmentals.solarstill_set.name = "A Solar Still";
environmentals.stonewaterstill_unlit.name = "An Unlit Stone Water Still";
environmentals.stonewaterstill_lit.name = "A Lit Stone Water Still";
environmentals.livingmushroom_corpse.name = "A Living Mushroom Corpse";
environmentals.kraken_corpse.name = "A Kraken Corpse";
environmentals.monsteridol.name = "A Monster Idol";
environmentals.woodenfence.name = "A Wooden Fence";
environmentals.harpy_corpse.name = "A Harpy Corpse"; //Added 1.7.4
environmentals.firesource.name = "Fire Source";

//Items
items.amber.name = "琥珀";
items.animalskull.name = "動物頭骨";
items.arrow.name = "箭矢";
items.arrowhead.name = "箭頭";
items.ashpile.name = "一堆灰塵";
items.barkleggings.name = "樹皮護腿";
items.barkshield.name = "樹皮盾";
items.barktunic.name = "樹皮短衣";
items.bone.name = "一根骨頭";
items.branch.name = "樹枝";
items.cactusspines.name = "仙人掌刺";
items.charcoal.name = "木炭";
//items.cobblestonefloor.name = "Cobblestone Flooring"; //Removed 1.8.1
items.cobblestone.name = "鵝卵石地板"; //Added 1.8.1
items.cookedmeat.name = "熟肉";
items.earthworm.name = "蚯蚓";
items.feather.name = "羽毛";
items.fertilesoil.name = "肥沃的土壤";
items.seawaterwaterskin.name = "裝了海水的水袋";
items.fireplough.name = "A Fire Plough"; //
items.flowerseeds.name = "花卉種子";
items.fossil.name = "化石";
items.goldcoins.name = "一堆金幣";
items.goldenchalice.name = "金質酒杯";
items.goldenring.name = "黃金戒指";
items.goldensword.name = "黃金劍";
items.grassseeds.name = "草籽";
items.ironore.name = "鐵礦";
items.kindling.name = "引火物";
items.largerock.name = "大石塊";
items.leafbedroll.name = "葉子睡墊";
items.leather.name = "羽毛睡墊";
items.leaves.name = "葉子";
items.limestone.name = "石灰石";
items.log.name = "原木";
items.mortarandpestle.name = "研磨缽杵";
items.mushrooms.name = "一般蘑菇";
items.nopal.name = "仙人掌";
items.peat.name = "泥炭";
items.sandstone.name = "砂岩";
items.pileofgravel.name = "一堆礫石";
items.pileofsand.name = "一堆沙";
items.woodenarrow.name = "木箭矢";
items.stoneaxe.name = "石斧";
items.bandage.name = "繃帶";
items.wovenfabric.name = "編織布料";
items.cactusneedle.name = "仙人掌針";
items.stoneshovel.name = "石鏟";
items.woodenspear.name = "木矛";
items.suture.name = "縫合用針線";
items.raft.name = "木筏";
items.rawmeat.name = "生肉";
items.redberries.name = "紅莓果";
items.redmushroom.name = "有班點的紅蘑菇";
items.rope.name = "繩索";
items.sapling.name = "樹苗";
items.seaweed.name = "海藻";
items.sharpglass.name = "尖銳的玻璃";
items.sharprock.name = "尖石塊";
items.skullcap.name = "骨頭盔";
items.smoothrock.name = "平滑的石塊";
items.soil.name = "泥土";
items.spear.name = "石矛"; //Edited 1.9
items.stones.name = "碎石頭";
items.stonewall.name = "石牆";
items.string.name = "線";
items.strippedbark.name = "剝下的樹皮";
items.tannedleather.name = "鞣製皮革";
items.tannin.name = "丹寧";
items.thistleseeds.name = "薊種子";
items.treebark.name = "樹皮";
items.treefungus.name = "木耳";
items.treevine.name = "藤蔓";
items.twigs.name = "小樹枝";
items.waterskin.name = "皮革水袋";
items.woodenpole.name = "木棍";
items.peatbandage.name = "包著泥炭的繃帶";
items.bow.name = "弓";
items.bowdrill.name = "A Bow Drill"; //
items.fishingnet.name = "漁網";
items.rawtrout.name = "生鱒魚";
items.cookedtrout.name = "熟鱒魚";
items.campfire.name = "營火";
items.treevinewhip.name = "藤鞭";
items.pileofsnow.name = "一堆雪";
items.barktorch.name = "樹皮火把";
items.barktorch_lit.name = "點燃的樹皮火把";
items.handdrill.name = "A Hand Drill"; //
items.smallbag.name = "小袋子";
items.shale.name = "頁岩";
items.sharpenedbone.name = "尖銳的骨頭";
items.grindstone.name = "磨石";
items.rawfishsteak.name = "生魚排";
items.cookedfishsteak.name = "熟魚排";
items.desalinatedwaterwaterskin.name = "裝了淡化水的水袋";
items.boatpaddle.name = "船槳";
items.bullboat.name = "牛皮舟";
items.refinedsand.name = "精煉過的沙";
items.spyglass.name = "小望遠鏡";
items.flask.name = "長頸燒瓶";
items.rawclay.name = "黏土";
items.rawclayblowpipe.name = "黏土吹管";
items.clayblowpipe.name = "陶吹管";
items.leatherbelt.name = "皮革腰帶";
items.leathertunic.name = "皮革短衣";
items.leatherboots.name = "皮靴";
items.leathercap.name = "皮帽";
items.leathergorget.name = "皮革護頸";
items.leatherpants.name = "皮革褲";
items.leathergloves.name = "皮革手套";
items.furnace.name = "熔爐";
items.kiln.name = "窯";
items.irontongs.name = "鑄鐵鉗";
items.talc.name = "滑石";
items.talcumpowder.name = "滑石粉";
items.sandcastflask.name = "砂鑄箱";
items.lens.name = "透鏡";
items.plantroots.name = "植物根"; //Edited 1.9.1
items.lockpick.name = "開鎖工具";
items.boneneedle.name = "骨針";
items.pineapple.name = "鳳梨";
items.tatteredmap.name = "破爛的地圖";
items.coal.name = "煤炭";
items.wroughtiron.name = "熟鐵";
items.limestonepowder.name = "石灰石";
items.ironingot.name = "鑄鐵錠";
items.backpack.name = "背包";
items.rottenmeat.name = "腐肉";
items.stonehammer.name = "石錘";
items.rawchicken.name = "生雞肉";
items.cookedchicken.name = "熟雞肉";
items.forgeandanvil.name = "熔鐵爐與鐵鉆";
items.woodenchest.name = "木箱";
items.ironsword.name = "鑄鐵劍";
items.ironbreastplate.name = "鑄鐵胸甲";
items.ironboots.name = "鑄鐵靴";
items.ironhelmet.name = "鑄鐵頭盔";
items.irongorget.name = "鑄鐵護頸";
items.irongreaves.name = "鑄鐵護脛";
items.irongauntlets.name = "鑄鐵護手";
items.ironshield.name = "鑄鐵盾";
items.sandstonewall.name = "砂岩牆";
items.sandstonefloor.name = "砂岩地板";
items.spidersilk.name = "蜘蛛絲";
items.animalfat.name = "動物脂肪";
items.animalfattorch.name = "動物油脂火把";
items.clayflakes.name = "黏土薄片";
items.greensand.name = "濕砂";
items.oldinstructionalscroll.name = "古老的教學卷軸";
items.slimegelatin.name = "史萊姆凝膠";
items.glue.name = "膠水";
items.cookedspider.name = "煮熟的蜘蛛";
items.deadspider.name = "死蜘蛛";
items.ironlockpick.name = "鑄鐵開鎖工具";
items.rottingvegetation.name = "腐爛的蔬菜";
items.wildonion.name = "野洋蔥";
items.ironhammer.name = "鑄鐵槌";
items.ironspear.name = "鑄鐵矛";
items.ironshovel.name = "鑄鐵鏟";
items.irondoubleaxe.name = "鑄鐵雙頭斧";
items.ironpickaxe.name = "鑄鐵鎬";
items.torchstand.name = "火把座";
items.coconut.name = "椰子";
items.palmleaf.name = "棕櫚葉";
items.offal.name = "內臟";
items.bones.name = "骨頭";
items.poletorch_lit.name = "點燃的木棍火把";
items.cotton.name = "棉花";
items.cottonseeds.name = "棉花種子";
items.cottonfabric.name = "棉織布料";
items.bonepole.name = "骨棒";
items.tourniquet.name = "止血帶";
items.wroughtironpickaxe.name = "熟鐵鎬";
items.wroughtirondoubleaxe.name = "熟鐵雙頭斧";
items.wroughtironshovel.name = "熟鐵鏟";
items.wroughtironspear.name = "熟鐵矛";
items.wroughtironhammer.name = "熟鐵錘";
items.wroughtironlockpick.name = "熟鐵開鎖工具";
items.wroughtironshield.name = "A Wrought Iron Shield";
items.wroughtirongauntlets.name = "Wrought Iron Gauntlets";
items.wroughtirongreaves.name = "Wrought Iron Greaves";
items.wroughtirongorget.name = "A Wrought Iron Gorget";
items.wroughtironhelmet.name = "A Wrought Iron Helmet";
items.wroughtironboots.name = "Wrought Iron Boots";
items.wroughtironbreastplate.name = "A Wrought Iron Breastplate";
items.wroughtironsword.name = "A Wrought Iron Sword";
items.woodenwall.name = "A Wooden Wall";
items.woodenfloor.name = "Wooden Flooring";
items.woodendoor.name = "A Wooden Door";
items.fishingrod.name = "A Fishing Rod";
items.messageinabottle.name = "A Message in a Bottle";
items.carbonpowder.name = "Carbon Powder";
items.pileofcompost.name = "Pile of Compost";
items.meltedamber.name = "Melted Amber";
items.tinder.name = "Tinder";
items.deadfall.name = "A Deadfall";
items.snare.name = "A Snare";
items.medicinalwaterwaterskin.name = "Medicinal Water in Waterskin";
items.charcoalbandage.name = "A Charcoal Bandage";
items.woodentongs.name = "Wooden Tongs";
items.wroughtirontongs.name = "Wrought Iron Tongs";
items.sheetofglass.name = "A Sheet of Glass";
items.solarstill.name = "A Solar Still";
items.stonewaterstill.name = "A Stone Water Still";
items.sundial.name = "A Sundial";
items.animalfattorch_lit.name = "A Lit Animal Fat Torch";
items.sinew.name = "Sinew";
items.shortbow.name = "A Short Bow";
items.longbow.name = "A Long Bow";
items.compositebow.name = "A Composite Bow";
items.purifiedfreshwaterwaterskin.name = "Purified Fresh Water in Waterskin";
items.unpurifiedfreshwaterwaterskin.name = "Unpurified Fresh Water in Waterskin";
items.glassbottle.name = "A Glass Bottle";
items.cork.name = "A Cork";
items.seawaterglassbottle.name = "Sea Water in Glass Bottle";
items.desalinatedwaterglassbottle.name = "Desalinated Water in Glass Bottle";
items.medicinalwaterglassbottle.name = "Medicinal Water in Glass Bottle";
items.purifiedfreshwaterglassbottle.name = "Purified Fresh Water in Glass Bottle";
items.unpurifiedfreshwaterglassbottle.name = "Unpurified Fresh Water in Glass Bottle";
items.wroughtironarrow.name = "A Wrought Iron Arrow";
items.ironarrow.name = "An Iron Arrow";
items.stonebullet.name = "A Stone Bullet";
items.wroughtironbullet.name = "A Wrought Iron Bullet";
items.ironbullet.name = "An Iron Bullet";
items.leatherquiver.name = "A Leather Quiver";
items.ectoplasm.name = "Ectoplasm";
items.magicalessence.name = "Magical Essence"; //Edited 1.9.2
items.woodenfence.name = "A Wooden Fence";
items.monsteridol.name = "A Monster Idol";
items.cordedsling.name = "A Corded sling";
items.leathersling.name = "A Leather sling";
items.wroughtironarrowhead.name = "A Wrought Iron Arrowhead";
items.ironarrowhead.name = "An Iron Arrowhead";
items.hammock.name = "A Hammock";
items.cottonbedroll.name = "A Cotton Bedroll";
items.featherbedroll.name = "A Feather Bedroll";
items.rawtaintedmeat.name = "Raw Tainted Meat";
items.cookedtaintedmeat.name = "Cooked Tainted Meat";
items.stoneknife.name = "A Stone Knife";
items.rawblindfish.name = "A Raw Blindfish";
items.cookedblindfish.name = "A Cooked Blindfish";
items.pemmican.name = "Pemmican"; //Added 1.9
items.preparedpemmican.name = "Prepared Pemmican"; //Added 1.9
//Added All 1.9.1
items.sail.name = "A Sail";
items.sailboat.name = "A Sailboat";
items.egg.name = "An Egg";
items.boiledegg.name = "A Boiled Egg";
//End Added
//Added All 1.9.2
items.grassblades.name = "Grass Blades";
items.niter.name = "Nitre";
items.saltpeter.name = "Saltpeter";
items.blackpowder.name = "Black Powder";
items.flintlockpistol.name = "Flint Lock Pistol";
//End Added
groups.sharpeneditem.name = "Sharpened";
groups.polelike.name = "Pole-like";
groups.rocklike.name = "Rock-like";
groups.fuellike.name = "Fuel-like";
groups.needlelike.name = "Needle-like";
groups.hammerlike.name = "Hammer";
groups.torchlike.name = "Light-source";
groups.bonelike.name = "Bones";
groups.fabriclike.name = "Fabrics";
groups.ropelike.name = "Rope-like";
groups.insect.name = "Insect";
groups.carbons.name = "Carbons";
groups.compost.name = "Compost";
groups.medicinal.name = "Medicinal";
groups.tongs.name = "Tongs";
groups.water.name = "Water";
groups.potablewaterskin.name = "Potable Water in Waterskin";
groups.potablebottle.name = "Potable Water in Glass Bottle";
groups.container.name = "Container";
groups.arrow.name = "Arrow";
groups.bullet.name = "Bullet";
groups.sharpenedrock.name = "Sharpened Rock";
groups.meat.name = "Meat"; //Added 1.9
groups.treasure.name = "Treasure"; //Added 1.9.1
//Added All 1.9.2
groups.repair.name = "Repair";
groups.transmogrify.name = "Transmogrify";
groups.reinforce.name = "Reinforce";
groups.preserve.name = "Preserve";
//End Added
descriptions.rest.name = "Rest";
descriptions.rest.description = "Used to rest for a period of time to regain health and stamina. Duration is based on Camping skill and will automatically stop when reaching full stamina."; //Edited 1.8.6
descriptions.eat.name = "Eat";
descriptions.eat.description = "Consumed on use. May provide benefits to hunger, thirst, health and stamina; however, may reduce them as well.";
descriptions.drink.name = "Drink";
descriptions.drink.description = "Consumed on use. Will reduce your thrist; however, will provide negative effects when drinking sea/unpurified water.";
descriptions.carve.name = "Carve";
descriptions.carve.description = "Used to carve creature corpses or to remove objects attached to the ground.";
descriptions.dig.name = "Dig";
descriptions.dig.description = "Used to dig up resources and items from the ground.";
//descriptions.cast.name = "Cast"; //Removed 1.8.6
//descriptions.cast.description = "Find a fish in a body of water and attempt to cast your line or net to catch it."; //Removed 1.8.6
descriptions.shoot.name = "Shoot";
descriptions.shoot.description = "You can shoot arrows with this item.";
//descriptions.setDown.name = "Set Down"; //Removed 1.8.6
//descriptions.setDown.description = "Using this item will place it over top of what ever tile is present in your facing direction. This is different than just dropping the item. It can also be used to extinguish fires."; //Removed 1.8.6
descriptions.sling.name = "Sling";
descriptions.sling.description = "You can sling bullets with this item."; //Edited 1.8.6
//descriptions.drift.name = "Drift"; //Removed 1.8.6
//descriptions.drift.description = "Used to fast travel across water to other islands in your current area in the direction used."; //Removed 1.8.6
descriptions.startFire.name = "Start Fire";
descriptions.startFire.description = "Used to start a fire. This cannot be used on some non-dry tiles without fuel. Use on Campfires, Furnaces, Kilns, etc. to light them. Using this action may require Kindling, Tinder and a Fuel-like item in your inventory depending on the circumstance.";
//descriptions.gatherWater.name = "Gather Water"; //Removed 1.8.6
//descriptions.gatherWater.description = "Used to gather water into the item."; //Removed 1.8.6
descriptions.lockpick.name = "Lockpick";
descriptions.lockpick.description = "Used to unlock locked chests.";
descriptions.repair.name = "Repair";
descriptions.repair.description = "Use while facing a damaged item to attempt to repair it. Success based on skill used to make the item.";
descriptions.heal.name = "Heal";
descriptions.heal.description = "Consumed on use. Used to restore a varied amount of health.";
descriptions.travel.name = "Travel";
descriptions.travel.description = "Used to travel to new, unexplored lands, leaving behind your current surroundings."; //Edited 1.9.1
descriptions.look.name = "Look";
descriptions.look.description = "Used to look one full map away from you in the direction facing. Displayed on minimap.";
descriptions.decode.name = "Decode";
descriptions.decode.description = "Used for attempting to read the map. Use by the treasure location to reveal how far or close you are. Use while facing the exact spot to dig up the treasure.";
//descriptions.ignite.name = "Ignite"; //Removed 1.8.6
//descriptions.ignite.description = "Use this item on a fire source to start it on fire."; //Removed 1.8.6
descriptions.read.name = "Read";
descriptions.read.description = "Consumed on use. reading usually provides useful knowledge.";
descriptions.reinforce.name = "Reinforce";
descriptions.reinforce.description = "Consumed on use. Use while facing a damaged item to attempt to increase the overall maximum and minimum durability. Success based on skill used to make the item.";
descriptions.openContainer.name = "Open Container";
descriptions.openContainer.description = "Using this will open it where you may drag and drop items to and from. Weight reduction and decay reduction bonuses may apply to items inside.";
//descriptions.open.name = "Open"; //Removed 1.8.6
//descriptions.open.description = "Consumed on use. Using this will open it, providing new and unknown items."; //Removed 1.8.6
descriptions.cure.name = "Cure";
descriptions.cure.description = "Consumed on use. Used to cure a poison or burning pain while sometimes providing other health benefits.";
descriptions.tellTime.name = "Tell Time";
descriptions.tellTime.description = "Used to measure the time of day or night.";
descriptions.transmogrify.name = "Transmogrify";
descriptions.transmogrify.description = "Use while facing an equippable item to attempt to infuse with magical properties.";
descriptions.stokeFire.name = "Stoke Fire";
descriptions.stokeFire.description = "Used on a fire source to increase the flame's strength.";
descriptions.pour.name = "Pour";
descriptions.pour.description = "Pour on fire to extiguish the flames, pour inside a water still to begin water filtration, pour on a suitable plant to increase it's health, or just simply empty out.";
descriptions.plant.name = "Plant";
descriptions.plant.description = "Attempts to plant the item on the tile you are facing towards. Some plants may require certain ground types or conditions to be planted.";
descriptions.garden.name = "Garden";
descriptions.garden.description = "Use on a plant to increase its fertility. Can only be used on some plant types.";
descriptions.build.name = "Build";
descriptions.build.description = "Attempt to construct or assemble the item on the tile you are facing towards.";
descriptions.gatherTreasure.name = "Gather Treasure"; //Added 1.8.2
descriptions.gatherTreasure.description = "Attempt to gather a treasure in the vicinity of use based on a decoded treasure map. Range of gather is dependent on your Mining skill."; //Added 1.8.2 //Edited 1.8.4
//Added All 1.8.6
descriptions.sleep.name = "Sleep";
descriptions.sleep.description = "Used to sleep for a period of time to regain health and stamina. Duration is based on Camping skill and time of day. A bonus to to all effects (including length) will be granted if facing a fire or lit object. Hunger and dehydration increases slower while sleeping.";
descriptions.fishing.name = "Cast";
descriptions.fishing.description = "Find a fish in a body of water and attempt to cast your line or net to catch it.";
descriptions.placeTile.name = "Set Down";
descriptions.placeTile.description = "Using this item will place it over top of what ever tile is present in your facing direction. This is different than just dropping the item. It can also be used to extinguish fires.";
descriptions.raft.name = "Drift";
descriptions.raft.description = "Used to fast travel across water to other islands in your current area in the direction used.";
descriptions.fillWater.name = "Gather Water";
descriptions.fillWater.description = "Used to gather water into the item.";
descriptions.lightItem.name = "Ignite";
descriptions.lightItem.description = "Use this item on a fire source to start it on fire.";
descriptions.openBottle.name = "Open";
descriptions.openBottle.description = "Consumed on use. Using this will open it, providing new and unknown items.";
//End Added
descriptions.sailHome.name = "Sail Home"; //Added 1.9.1
descriptions.sailHome.description = "After collecting enough treasure, you can return home and bask in the glory of your riches and fame. And start a new adventure!"; //Added 1.9.1
//Added All 1.9.2
descriptions.preserve.name = "Preserve";
descriptions.preserve.description = "Used with food items to extend their life and decay rate.";
descriptions.fire.name = "Fire";
descriptions.fire.description = "Using a mixture of Black Powder along with a bullet, you may fire this weapon.";
//End Added

//NPCs
npcs.slime.name = "史萊姆";
npcs.jellycube.name = "立方體果凍";
npcs.giantspider.name = "巨型蜘蛛";
npcs.bear.name = "熊";
npcs.rabbit.name = "兔子";
npcs.snake.name = "蛇";
npcs.giantrat.name = "巨鼠";
npcs.rat.name = "老鼠";
npcs.vampirebat.name = "吸血蝙蝠";
npcs.greywolf.name = "灰狼";
npcs.imp.name = "小惡魔";
npcs.bogling.name = "沼澤樹妖";
npcs.livingrock.name = "石巨像";
npcs.shark.name = "鯊魚";
npcs.zombie.name = "殭屍";
npcs.skeleton.name = "骷髏";
npcs.pirateghost.name = "海盜鬼魂";
npcs.timeskitter.name = "時空劫掠者";
npcs.chicken.name = "雞";
npcs.trapdoorspider.name = "地穴蜘蛛";
npcs.fireelemental.name = "火元素";
npcs.trout.name = "鱒魚";
npcs.hobgoblin.name = "深山哥布林";
npcs.livingmushroom.name = "蘑菇怪";
npcs.kraken.name = "海怪";
npcs.blindfish.name = "盲魚";
npcs.harpy.name = "鳥身女妖"; //Added 1.7.4

//Tiles
tiletypes.ash.name = "灰燼";
tiletypes.cobblestone.name = "鵝卵石";
tiletypes.darkness.name = "黑暗";
tiletypes.deepwater.name = "深的海水";
tiletypes.dirt.name = "泥土";
tiletypes.exit.name = "一個入口";
tiletypes.forest.name = "樹";
tiletypes.grass.name = "草地";
tiletypes.gravel.name = "礫石";
tiletypes.highrock.name = "巨岩";
tiletypes.rock.name = "岩石";
tiletypes.sand.name = "沙";
tiletypes.sandstone.name = "砂岩";
tiletypes.shallowwater.name = "淺的海水";
tiletypes.snow.name = "雪";
tiletypes.stonewall.name = "石牆";
//tiletypes.stonewall_north.name = "Stone Wall"; //Removed 1.7.2
tiletypes.swamp.name = "沼澤";
tiletypes.water.name = "海水";
tiletypes.clay.name = "黏土";
tiletypes.sandstonewall.name = "砂岩牆";
//tiletypes.sandstonewall_north.name = "Sandstone Wall"; //Removed 1.7.2
tiletypes.sandstonefloor.name = "砂岩地板";
tiletypes.palm.name = "棕櫚樹";
tiletypes.barepalm.name = "光禿禿的棕櫚樹";
tiletypes.bareforest.name = "光禿禿的樹";
tiletypes.woodenwall.name = "木牆";
//tiletypes.woodenwall_north.name = "Wooden Wall"; //Removed 1.7.2
tiletypes.woodenfloor.name = "木地板";
tiletypes.woodendoor.name = "木門";
tiletypes.freshdeepwater.name = "深的淡水";
tiletypes.freshshallowwater.name = "淺的淡水";
tiletypes.freshwater.name = "淡水";
//Added All 1.7.2
tiletypes.ironrock.name = "含鐵的岩石";
tiletypes.ironsandstone.name = "含鐵的砂岩";
tiletypes.talcrock.name = "含滑石的岩石";
tiletypes.limestonerock.name = "含石灰石的岩石";
tiletypes.berryforest.name = "長著梅果的樹";
tiletypes.fungusforest.name = "長著木耳的樹";
tiletypes.vineforest.name = "有藤蔓的樹";
tiletypes.coconutpalm.name = "有椰子的棕櫚樹";
//End Added
tiletypes.coalrock.name = "含碳的岩石"; //Added 1.8.1
tiletypes.nitersandstone.name = "含硝酸鹽的岩石"; //Added 1.9.2

//Player
//Edited All 1.7.2
player.skillTypes.lumberjacking.name = "伐木";
player.skillTypes.lumberjacking.description = "增加採集樹木時的資源掉落機率。<br />減少伐木時的耐力消耗機率。";
player.skillTypes.mining.name = "採礦";
player.skillTypes.mining.description = "增加採集岩石時的資源掉落機率。<br />減少採礦時的耐力消耗機率。<br />增加你可以採到寶藏的距離。"; //Edited 1.8.2
player.skillTypes.cooking.name = "烹飪";
player.skillTypes.cooking.description = "影響烹飪過物品的腐敗時間。";
player.skillTypes.camping.name = "露營";
player.skillTypes.camping.description = "增加使用睡墊睡覺經過的回合數。<br />增加生火成功的機率。";
player.skillTypes.tinkering.name = "修補";
player.skillTypes.tinkering.description = "影響使用混雜種類的資源與方法製作物品時的品質、修復率、與成功機率。";
player.skillTypes.tactics.name = "戰技";
player.skillTypes.tactics.description = "增加你的基礎攻擊值。<br />增加戰鬥中擊中目標的機率。<br />減少戰鬥時的耐力消耗機率。";
player.skillTypes.parrying.name = "格檔";
player.skillTypes.parrying.description = "增加你的基礎防禦值。<br />增加戰鬥中受到較少傷害的機率。";
player.skillTypes.mycology.name = "真菌學";
player.skillTypes.mycology.description = "增加種植蘑菇成功的機率。<br />增加食用蘑菇類消耗品時的效果。<br />減少踩壞蘑菇的機率。";
player.skillTypes.botany.name = "植物學";
player.skillTypes.botany.description = "增加種植植物成功的機率。<br />增加食用植物類消耗品時的效果。<br />減少踩壞植物的機率。";
player.skillTypes.throwing.name = "投擲";
player.skillTypes.throwing.description = "增加投擲一個物品時的攻擊傷害、準確度以及最大距離。";
player.skillTypes.swimming.name = "游泳";
player.skillTypes.swimming.description = "增加水中旅行的速度。<br />減少在水中的耐力消耗機率。";
player.skillTypes.fletching.name = "遠距離裝備合成";
player.skillTypes.fletching.description = "影響製作箭矢、弓、與投石索的品質與修復率。";
player.skillTypes.woodworking.name = "木工";
player.skillTypes.woodworking.description = "影響使用木頭製作物品時的品質、修復率與成功率。";
player.skillTypes.blacksmithing.name = "鍛造";
player.skillTypes.blacksmithing.description = "影響使用金屬製作物品時的品質、修復率與成功率。";
player.skillTypes.stonecrafting.name = "石工";
player.skillTypes.stonecrafting.description = "影響使用石頭與岩石製作物品時的品質、修復率與成功率。";
player.skillTypes.tailoring.name = "裁縫";
player.skillTypes.tailoring.description = "影響使用布料製作物品時的品質、修復率與成功率。";
player.skillTypes.leatherworking.name = "Leatherworking";
player.skillTypes.leatherworking.description = "影響使用皮革製作物品時的品質、修復率與成功率。";
player.skillTypes.fishing.name = "釣魚";
player.skillTypes.fishing.description = "增加成功抓到魚的機率。增加使用釣竿時的最大距離。<br />增加你能由此撿到寶藏的距離。"; //Edited 1.8.2
player.skillTypes.archery.name = "箭術";
player.skillTypes.archery.description = "增加使用弓箭時的攻擊傷害、準確度與最大距離。";
player.skillTypes.alchemy.name = "鍊金術";
player.skillTypes.alchemy.description = "影響使用化學混合物製作物品時的品質與成功率。";
player.skillTypes.claythrowing.name = "塑泥";
player.skillTypes.claythrowing.description = "影響使用黏土製作物品時的品質與成功率。";
player.skillTypes.glassblowing.name = "吹玻璃";
player.skillTypes.glassblowing.description = "影響使用玻璃製作物品時的品質與成功率。";
player.skillTypes.lockpicking.name = "開鎖";
player.skillTypes.lockpicking.description = "增加成功打開箱子鎖的機率。";
player.skillTypes.cartography.name = "製圖學";
player.skillTypes.cartography.description = "增加成功解讀破爛的地圖的機率。<br />減少閱讀破爛的地圖時把它變模糊的機率。";
player.skillTypes.anatomy.name = "解剖學";
player.skillTypes.anatomy.description = "增加判斷生物生命值的準確度(透過右鍵點擊)。<br />減少流血的機率。<br />增加醫療類消耗品的效果。";
player.skillTypes.trapping.name = "陷阱";
player.skillTypes.trapping.description = "增加陷阱對生物的傷害值與傷害生物的成功率。<br />減少自己觸發陷阱的機率與陷阱對自己造成的傷害。";
player.milestones.abnormalizer.name = "變異殺手";
player.milestones.abnormalizer.description = "殺掉25隻異變生物。";
player.milestones.chef.name = "大廚";
player.milestones.chef.description = "烹煮25個食物。";
player.milestones.crafter.name = "製造者";
player.milestones.crafter.description = "製造250個物品。";
player.milestones.extincteur.name = "毀滅者";
player.milestones.extincteur.description = "殺掉1000隻生物。";
player.milestones.gardener.name = "園丁";
player.milestones.gardener.description = "種植50株植物或蘑菇。";
player.milestones.gatherer.name = "採集者";
player.milestones.gatherer.description = "採集1000次。";
player.milestones.hunter.name = "獵手";
player.milestones.hunter.description = "殺掉100隻生物。";
player.milestones.modder.name = "模組愛好者";
player.milestones.modder.description = "載入10次模組。";
player.milestones.locksmith.name = "鎖匠";
player.milestones.locksmith.description = "撬開10個鎖。";
player.milestones.reaperofsouls.name = "靈魂收割者";
player.milestones.reaperofsouls.description = "殺掉50隻鬼並採集他們的屍體。";
player.milestones.survivor.name = "生存者";
player.milestones.survivor.description = "活過10000回合。";
player.milestones.thrower.name = "投擲專家";
player.milestones.thrower.description = "投擲500個物品。";
player.milestones.trapper.name = "陷阱高手";
player.milestones.trapper.description = "用陷阱傷害10個生物。";
player.milestones.treasurehunter.name = "寶藏獵人";
player.milestones.treasurehunter.description = "挖或釣到10個寶藏箱。";
//End Edited

//Hints
hints.welcometowayward.name = "歡迎來到 Wayward";
hints.welcometowayward.description = '歡迎來到 Wayward 的先行版！Wayward 目前處在 beta 階段，許多事情都會隨著時間改變與改進。像這樣的提示視窗會隨著你遊玩本遊戲而顯示。如果你需要更多幫助，可以到 <a target="_blank" href="http://www.unlok.ca/wayward/documentation.html">Official Documentation</a>.<br /><br />If you want to keep up with Wayward, please visit the <a target="_blank" href="http://www.unlok.ca/forums/">Forums</a>, <a target="_blank" href="http://www.unlok.ca/category/wayward/">Blog</a> or <a target="_blank" href="http://www.reddit.com/r/Wayward/">Subreddit</a>.<br /><br />Want to help Wayward? Spread the word, or follow us on one of the following sites: <a target="_blank" href="https://www.facebook.com/waywardgame">Facebook</a>, <a target="_blank" href="http://www.indiedb.com/games/wayward">IndieDB</a>, <a target="_blank" href="http://steamcommunity.com/sharedfiles/filedetails/?id=151680542">Steam Greenlight</a>.'; //Edited 1.9.1
hints.controls.name = "操作方法"; //Added 1.8.1
hints.controls.description = "<strong>移動</strong><br />To move, you are able to use W,A,S,D, arrow keys, VI keys (H,J,K,L), or by left clicking/tapping on the game screen in the direction you want to move. To skip/pass a turn, or to pick up item(s) on the tile you are standing on, press the spacebar or left click/tapping your character on the game screen.<br /><br /><strong>Using Items</strong><br />To use an item, you may click/tap it to bring up the item menu to click on an action. Additionally, you are able to drag and drop an item into one of the quickslots. Press the number (1, 2, 3, etc.) that corresponds with which quickslot it is attached to perform the primary action for the item.<br /><br /><strong>Item Uses, Dropping and Information</strong><br />Some items have more than one use - these will show up in the item's menu if available. You are able to right click an item to automatically drop it without going into the item menu. If you are facing a container, you will drop the item inside. You can use shift (or alt) + right click (or use 'Drop' from the menu) to drop multiple items of the same kind (Note: Shift + right click does not work in Firefox, use alt). You are also able to right click on the game screen to reveal information about what you are clicking on, whether it be items, monsters, tiles, and more.<br /><br /><strong>More Information</strong><br />Hovering over elements on screen will typically reveal more information. Tool-tips will appear over items. Hovering over crafting items will highlight items used in the craft (ordered by inventory/equipment/quickslot order).<br /><br /><strong>Item Management</strong><br />Besides dragging and dropping items to your quickslots, you are also able to equip items in this fashion, provided it is an equipment item and fits in that slot. Dragging and dropping is also required to move items your container window and inventory (besides right clicking to drop an item into a container on the ground). Additionally, Right clicking an item in your equipment list, quickslots or container window will move it to your inventory.<br /><br /><strong>Window Shortcuts</strong><br />Esc = Main Menu<br />I = Inventory<br />E = Equipment<br />C = Crafting<br />/ = Help<br />X = Skills<br />M = Messages<br />O = Options<br />Q = Actions"; //Edited 1.8.5
hints.corpsecarving.name = "Corpse Carving";
hints.corpsecarving.description = "To harvest potential resources from this corpse, try carving it with a sharp item. You can double click an item to use it.";
hints.environmentalpickup.name = "Environmental Items/Objects"; //Edited 1.8.5
hints.environmentalpickup.description = 'To pick-up or gather from any environmental item/objects, such as plants or items attached to the ground like furnances, campfires, etc you can do one of the following:<br />1. While facing the item, click or press the "Actions" hotkey, and select the "Pick-up" option.<br />2. Use an item with "Digging" such as a shovel.<br />3. Use an item with "Carving" such as a sharp rock. Using your bare hands with no tool (option 1) can sometimes harm you. Using a tool (option 2 and 3) will decrease the durability of the item. Some objects may require a "Carving" tool such as corpses to harvest from.'; //Edited 1.8.5
hints.cavedarkness.name = "Cave Darkness";
hints.cavedarkness.description = "This would be the perfect place for hidden treasure, but first the area requires illumination with fire or a torch.";
hints.nightfall.name = "Nightfall";
hints.nightfall.description = "Nightfall approaches! Find a safe area to camp out, or prepare yourself for combat!";
hints.staminareplenishment.name = "Stamina Replenishment";
hints.staminareplenishment.description = "You are getting exhausted. Sleep or rest using a bedroll or hammock to regenerate stamina. You can also rest by going into the Actions menu and clicking Rest; however, resting with an item will produce better regenerative effects. Rest is different from sleep in that you will only ever rest until your stamina is maxed out. Alternatively, you may hold spacebar or click your character to skip turns."; //Edited 1.8.6
hints.healthreplenishment.name = "Health Problems";
hints.healthreplenishment.description = "You are quite injured, replenish your health with food or healing-type items. Some status effects reduce your ability to regenerate your health including Bleeding and Poisoning. Alternatively, you can also try sleeping or resting to regenerate health."; //Edited 1.8.6
hints.bleeding.name = "Bleeding";
hints.bleeding.description = "You are bleeding! This status effect is usually the result of a poor Anatomy skill and fighting a tough creature. Make sure to use a healing item to stop the bleeding, such as a Bandage or Tourniquet. Bleeding causes you to starve and dehydrate faster, regenerate stamina slower and not regenerate any health.";
hints.poisoned.name = "Poisoned";
hints.poisoned.description = "You have been poisoned! Poisoning can happen from eating bad things or from some types of creatures. Make sure to use a curing item to cure the poison, such as a Charcoal Bandage or Medicinal Water. Poisoning causes you to dehydrate faster, slow stamina regeneration and not regenerate any health.";
hints.dehydration.name = "Dehydration";
hints.dehydration.description = "You are getting quite dehydrated. There's many ways to get drinkable water, but unfortunately for you, the largest source of water, from the sea is nearly undrinkable in it's raw form. You must desalinate the water through the use of a water still or flask before drinking it without adverse effects. Alternatively, you may seek out a fresh water source, such as from caves, small lakes, oases, swamps or ponds. Fresh water is drinkable in it's raw form without too many bad effects; however, you may still want to boil it for the best health results.";
hints.useatool.name = "Use A Tool";
hints.useatool.description = "Gathering resources with your hands is difficult and harmful, try equipping or using a tool to eliminate the chance of injury. If you are Mining or Lumberjacking, your weapon(s) attack value will also help gather items faster. Blunt attack weapon will help you gather faster while Mining, while Slashing weapons will help you gather faster while lumberjacking."; //Edited 1.8.5
hints.durability.name = "Durability";
hints.durability.description = "One of your tools, weapons or armor is close to breaking under overuse. If you can't find or craft an item to repair it, you will have to replace it.";
hints.death.name = "Death";
hints.death.description = "Death is permanent. Although you have died, all of the crafting recipes you have discovered will be ready on your next playthrough.";
hints.weightlimit.name = "Weight Limit";
hints.weightlimit.description = "You are overburdened. While carrying more than your maximum weight, you will walk very slowly, and lose stamina quickly. You can drop items from your inventory by right clicking. You can use shift (or alt) + right click to drop multiple items of the same type.";
hints.eatingbadthings.name = "Eating Bad Things";
hints.eatingbadthings.description = "Ow! Eating that has hurt you! Not all edible objects should be eaten, at least not without facing the consequences. On the other hand, sometimes it's worth the risk to gain other stats. Eating bad things can sometimes result in poisoning.";
hints.fastpickup.name = "Fast Pick-up";
hints.fastpickup.description = "You have just picked up an item from the ground. Sometimes there are multiple items on a tile. Pressing the spacebar or clicking on your character will gather items underneath you without moving.";
hints.bugs.name = "BUGS!";
hints.bugs.description = 'Did you find an error? Would you kindly let us know about what happened, so that we may seek to stop this from happening to other players? You can do so by editing the <a target="_blank" href="http://www.unlok.ca/wiki/wayward/bug-list/">Bug List</a>.'; //Edited 1.8.1
hints.helditems.name = "Held Items";
hints.helditems.description = "Your left and right hand equipment slots are interchangeable. You can equip two weapons, two tools, two shields or any combination in between. Be careful of damaging useful equipment such as torches or shields while gathering or attacking. Make sure to always equip another weapon or tool in the other hand if you want to use it to attack or gather over damaging an equipped torch. You attack with both hands in combat, so it's important to equip both your hands if possible."; //Edited 1.8.2
hints.milestones.name = "Milestones";
hints.milestones.description = "Milestones are personalized goals and achievements. Each playthrough, you are given an amount to either discover or work towards. Milestones are saved after each playthrough or death. The more you have completed, the more starting skill points you get and the more chance to get better starting items.";
hints.burning.name = "Burning";
hints.burning.description = "You have been burned! This lasting burning pain can be caused from stepping in an open flame without protection, or possibly other sources. Using a curing item such as a Charcoal Bandage or Medicinal Water will help soothe the pain. Alternatively, take a swim for a bit to remove the pain. Burning pain will stop you from regenerating health and can last quite awhile if untreated."; //Edited 1.8.2
hints.crafting.name = "Crafting"; //Added 1.8.1
hints.crafting.description = "Crafting is simple, but has many rules!<br /><br />When hovering over an item in the crafting dialog, you will see which items will be used in the craft through a highlighted border that will appear around items in your inventory, quickslot or equipment windows (priority is set in that order). You will also notice that you will use the first instance of a required item. Simply drag around the order of items in your inventory to use different items in the craft.<br /><br />Using items in a craft that that have lower durability will effect the crafted item's durability. Items that have zero durability cannot be used in a craft. Additionally, using Remarkable, Exceptional or Legendary items in a craft increases your chances to craft such an item. Decayable items (such as food) also gain decay bonuses from using higher quality items in the craft.<br /><br />You can find new crafting recipes by: gathering the required items in your inventory, by crafting and discovering new recipes, and by finding Old Instructional Scrolls."; //Added 1.8.1

//No translation changes needed below, but always replace with newer version's contents, new changes will not be noted

//Change all HTML definitions
$mainMenu = $('#main-menu');
$mainMenu.attr('title', Messages.mainMenu)
    .find('h3').text(Messages.wayward);
$mainMenu.find('.ui-dialog-titlebar').find('span').text(Messages.mainMenu);
$('#continue-game').text(Messages.startGame);
$('#daily-challenge-mode').text(Messages.dailyChallengeMode);
$('#returnToGame').text(Messages.returnToGame);
$('#saveAndContinue').text(Messages.saveAndContinue);
$('#saveAndExit').text(Messages.saveAndExit);
$('#endGame').text(Messages.endCurrentGame);
$('#help-extra').text(Messages.helpDocumentation);
$('#donations-extra').text(Messages.donations);
$('#options-extra').text(Messages.options);
$('#reset').text(Messages.reset);
$skillsWindow = $('#skillswindow');
$skillsWindow.attr('title', Messages.skills);
$skillsWindow.find('.ui-dialog-titlebar').find('span').text(Messages.skills);
$milestonesWindow = $('#milestoneswindow');
$milestonesWindow.attr('title', Messages.milestones);
$milestonesWindow.find('.ui-dialog-titlebar').find('span').text(Messages.milestones);
$inventoryWlindow = $('#inventorywindow');
$inventoryWlindow.attr('title', Messages.inventory);
$inventoryWlindow.find('.ui-dialog-titlebar').find('span').text(Messages.inventory);
$('#invfilter').attr('placeholder', Messages.filter);
$equipmentWindow = $('#equipmentwindow');
$equipmentWindow.attr('title', Messages.equipment);
$equipmentWindow.find('.ui-dialog-titlebar').find('span').text(Messages.equipment);
$('#hands').data('name', Messages.hands);
$('#head').data('name', Messages.head);
$('#neck').data('name', Messages.neck);
$('#righthand').data('name', Messages.rightHand);
$('#chest').data('name', Messages.chest);
$('#lefthand').data('name', Messages.leftHand);
$('#belt').data('name', Messages.belt);
$('#legs').data('name', Messages.legs);
$('#feet').data('name', Messages.feet);
$('#back').data('name', Messages.back);
$craftWindow = $('#craftwindow');
$craftWindow.attr('title', Messages.crafting);
$craftWindow.find('.ui-dialog-titlebar').find('span').text(Messages.crafting);
$('#craftfilter').attr('placeholder', Messages.filter);
$containerWindow = $('#containerwindow');
$containerWindow.attr('title', Messages.container);
$containerWindow.find('.ui-dialog-titlebar').find('span').text(Messages.container);
$optionsWindow = $('#optionswindow');
$optionsWindow.attr('title', Messages.options);
$optionsWindow.find('.ui-dialog-titlebar').find('span').text(Messages.options);
$('#sound').text(Messages.sound);
$('#volumeopt').text(Messages.volume100);
$('#soundopt').text(Messages.soundOn);
$('#musicopt').text(Messages.musicOn);
$('#nextsong').text(Messages.nextSong);
$('#game-options').text(Messages.gameOptions);
$('#autogather').text(Messages.autoGatherOn);
$('#dropongather').text(Messages.dropOnGatherOn);
$('#autopickup').text(Messages.autoPickupOn);
$('#hintsopt').text(Messages.disableHints);
$('#fontstyle').text(Messages.pixelFont);
$('#gamesize').text(Messages.fullGameSize);
$('#animations').text(Messages.animationsOn);
$('#smoothmovement').text(Messages.smoothMovementOff);
$('#zoomin').text(Messages.zoomIn);
$('#zoomout').text(Messages.zoomOut);
$('#trusted').text(Messages.trustedMods);
$hintsWindow = $('#hintswindow');
$hintsWindow.attr('title', Messages.hints);
$hintsWindow.find('.ui-dialog-titlebar').find('span').text(Messages.hints);
$versionWindow = $('#versionwindow');
$versionWindow.attr('title', Messages.version)
    .find('p').text(Messages.versionInfo);
$versionWindow.find('.ui-dialog-titlebar').find('span').text(Messages.version);
$('#menuopen').text(Messages.mainMenu);
$('#helpopen').text(Messages.help);
$('#milestonesopen').text(Messages.milestones);
$('#messagesopen').text(Messages.messages);
$('#optionsopen').text(Messages.options);
$('#inventoryopen').text(Messages.inventory);
$('#craftopen').text(Messages.crafting);
$('#equipmentopen').text(Messages.equipment);
$('#skillsopen').text(Messages.skills);
$('#attack-label').text(Messages.attackLabel);
$('#defense-label').text(Messages.defenseLabel);
$('#talent-label').text(Messages.talentLabel);
$('#weight-label').text(Messages.weight);
$('#status-label').text(Messages.statusLabel);
$('#code').attr('placeholder', Messages.code);
$('#run-code').text(Messages.runCode);
$('#actionsopen').text(Messages.actions);
$('#modding').text(Messages.modding);

//Change font to default sans-serif for better localized character support
ui.options.fontStyle = false;
ui.$body.addClass("fontstyle");
updateOptionButtonText();
