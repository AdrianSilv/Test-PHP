<?php
    $xml=simplexml_load_file("indeed.xml") or die("Error: Cannot create object");
    $json = json_encode(new SimpleXMLElement($xml->asXML(), LIBXML_NOCDATA));

    $array = json_decode($json,TRUE);

    $jobs = $array['job'];
    $jobs = json_encode($jobs);
    
    echo $jobs
    

?>