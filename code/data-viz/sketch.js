let trackNum;
let trackTime;
let albumColors = [];
let albumNames = ['comedown_machine','brief_inquiry_into_online_relationships', '1989', 'after_hours'];
let songLength;
let albumData;
let trackData;
let backgroundColor;

let maxDuration;
let albumTitle;
let trackTitle;
let songDuration;
let albumNum;


function preload() {
    //albumNames.forEach((name, index) => {
        albumTitle ='1989';
        trackTitle ='style';
        albumData = loadJSON(`data/${albumTitle}.json`);
        trackData = loadJSON(`data/${trackTitle}.json`);
  //  });
}

function setup() {
    //albumNames.forEach((_, index) => {
        createCanvas(600,600);
        // let albumContainerID = `canvas-${index}-container`;
        //cnv.parent(albumContainerID);
    //}
    songLength = albumData.tracks.items.map(track => track.duration_ms);
    //songDuration = albumData.tracks.items.duration_ms;
    maxDuration = max(songLength);
    angleMode(DEGREES);
    colorMode(HSB, 360,100,100);
}

function draw() {
    console.log(albumTitle, trackTitle);
   
    background(random(360),random(100),random(100));
    noLoop();
    drawTrackNum(albumData.total_tracks);
    console.log(albumData.total_tracks)
    //displayTitle();
    drawCircle();

} 

/* function backgroundBrightness() {
    let energy = trackData.energy;
    brightness = map(energy,0,1,0,100);
}

function backgroundHue() {
    let valence = trackData.valence;
    hue = map(valence,0,1,30,100);
} */


    /* function drawSeconds() {
        for (i = 0; i< albumData.total_tracks; i++) {
            let songDuration = songLength[i]
            let barWidth = map(songDuration,0,,0,width);
            songBar.mouseOver(trackTitle)


            

    } */




/* function expandTrack() {
    trackTitles = albumData.items.names
    text('trackTitle',0,i * height/totalTrackNum,)
    
}
*/


function displayTitle() {
    albumTitle = albumData.name
    console.log(albumTitle);
    push();
        fill('blue');
        noStroke();
        textStyle(BOLD);
        textSize(60);
        rotate(90);
        text(albumTitle,10,-height + 60);
    pop();
} 

