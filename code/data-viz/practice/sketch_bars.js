let trackNum;
let trackTime;
let albumColors = [];
let albumName = 'Brief_Inquiry_Into_Online_Relationships';
let songLength;
let albumData;
let maxDuration;

function preload() {
    albumData = loadJSON("data/" + albumName + ".json");

  }

function setup() {
    createCanvas(600,600);
    songLength = albumData.tracks.items.map(track => track.duration_ms);
    maxDuration = max(songLength);

   
}

function draw() {
    background(200);
    noLoop();
    drawTrackNum(albumData.total_tracks);

} 



function drawTrackNum(totalTrackNum) {
    totalTrackNum = albumData.total_tracks;
    for (i = 0; i< albumData.total_tracks; i++) {
        let duration = songLength[i]
        let barWidth = map(duration,0,maxDuration,0,width);
        push();
            noStroke();
            fill(random(255),random(255),random(255));
            rect(0,i * height/totalTrackNum, barWidth, height/totalTrackNum);
            console.log(albumColors);
        pop();

    }
}

  