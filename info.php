<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>

<h1>Introduction au PHP</h1>

<?php

$etablissement = "Institut Supérieur de Technologie";
$module = "Développement Web";
$annee = 2025;

$x = 8;
$y = 3;

$addition = $x + $y;
$multiplication = $x * $y;
?>

<h2>Informations générales</h2>
<p>Établissement : <?php echo $etablissement; ?></p>
<p>Module : <?php echo $module; ?></p>
<p>Année : <?php echo $annee; ?></p>

<h2>Variables numériques</h2>
<p>x = <?php echo $x; ?></p>
<p>y = <?php echo $y; ?></p>

<h2>Résultats des calculs</h2>
<p><?php echo "$x + $y = $addition"; ?></p>
<p><?php echo "$x × $y = $multiplication"; ?></p>

</body>
</html>
