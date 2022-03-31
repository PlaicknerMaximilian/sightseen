<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #7dd1c0;
}

.button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        position:absolute;
        top:10px;
        right:6px;
      }

      .button:hover {
       box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }
</style>
</head>
<body>

    <h1>Informationen über diese Website</h1>
    <button onclick="location.href='website.php'" class="button">Zurück zur Website</button>
    <h3>Allgemein:</h3>
    <p>In der Kopfzeile kann man die verschiedenen Kategorien auswählen. Zudem kann man sich rechts ausloggen.</p>
    <h3>Mich Suchen</h3>
    <p>Wenn man die Seite betritt, kann man mit dem Knopf „Mich Suchen“ drücken. Somit erscheint eine Karte, die einen roten Marker auf einen Standort setzt und einem die Sehenswürdigkeiten in der Nähe anzeigt. Links am Rand sieht man dann immer ein Foto pro Marker. Dies kann man auswählen und es werden einem dann weiteren Detail angezeigt. Zudem kann man auf der linken Seite oben das Kartenlayout von „Karte“ auf Satelliten umstellen. Rechts unten kann zudem noch die Karte vergrößert werden oder die „Street View “ Ansicht ausgewählt werden. Unter dem Punkt „Kategorien wählen“ kann man noch einstellen welche Kategorien auf der Karte angezeigt werden sollen und welche nicht. </p>
    <h3>Ort suchen</h3>
    <p>Wählt man in der Kopfzeile „Ort suchen“ aus, kann man mit drücken auf die Karte verschiedene Orte aussuchen. Die Karte ist nach dem gleichen Prinzip aufgebaut wie von „Dich suchen“; Links die Bilder mit den Zusatzinformationen und auf der Karte selbst die Einstellungsmöglichkeiten um das Layout, den Zoom und den „Street View“ zu ändern. Auch hier kann man unter „Kategorien wählen“ die Kategorien auswählen, die auf der Karte angezeigt werden sollen.</p>
    <h3>Routenplaner</h3>
    <p>Mit dem Routenplaner kann man sich die optimale Route von den Sehenswürdigkeiten in einer Stadt bzw. in einem gewissen Umkreis anzeigen lassen. Hier wird automatisch der eigene Standort ermittelt und man kann dann in der Liste im rechten der Karte die verschiedenen Sehenswürdigkeiten auswählen. Drückt man dann auf „Start“, wird die Route berechnet. Auf der Karte werden dann die Wegpunkte markiert und der Weg blau nachgefahren. Hier kann man keine Kategorien auswählen. Zudem werden auf die Bilder auf der liken Seiter der Karte nicht mehr angezeigt. Um sich die Router genauer anzuschauen kann man mit dem Knopf „Routensegmente“ die einzelnen Punkte etwas genauer in Textform anschauen.</p>

</body>
</html>