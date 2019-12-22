# WorkFlowy To Google Calendar Bookmarklet
- Create a new Google Calendar event from the zoomed WorkFlowy bullet.
- Also works on any webpage.

![WF2GCal](https://i.imgur.com/waRp4dy.png)

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function WF2GCal_2_3(isHF){function msToGCal(ms){const gString=new Date(ms).toISOString();return gString.replace(/\W/g,'').match(/.{13}/)[0]+'00Z'}function nextXminutes(m){const now=new Date((new Date).setSeconds(0,0));return now.setMinutes(Math.ceil(now.getMinutes()/m)*m)}const duration=30;const start=nextXminutes(30);const end=start+duration*60*1e3;const addEvent='https://calendar.google.com/calendar/r/eventedit?text=';const name=isHF?WF.currentItem().getNameInPlainText():document.title.replace(/ - WorkFlowy$/,'');const url=isHF?`https://workflowy.com${WF.currentItem().getUrl()}`:location.href;const details=`&amp;details=${encodeURIComponent(url)}`;const dates=`&amp;dates=${msToGCal(start)}/${msToGCal(end)}`;window.open(addEvent+encodeURIComponent(name)+details+dates)})(false);">WF2GCal</a>

## Links:
- [Source code](https://github.com/rawbytz/WF2GCal/blob/master/WF2GCal.js)
- [rawbytz Blog](https://rawbytz.wordpress.com/2018/02/05/workflowy-to-new-google-calendar/)
- [Chrome Extension](https://chrome.google.com/webstore/detail/workflowy-to-google-calen/jgcnopjghjlddcncaiohpbchlojdhgde)

<!-- 
LINKS REFERENCING THIS
@BLOGGER https://www.blogger.com/blogger.g?blogID=6597785605721546133#editor/target=page;pageID=5861783429926200936

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG https://rawbytz.wordpress.com/?s=WorkFlowy+to+google+calendar
 -->
