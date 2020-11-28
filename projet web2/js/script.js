function reserver(){
    if (document.contact.name.value.length<3)
    {
		alert('le nom doit être 3 caractères au moins !!');
		document.contact.name.focus();
		
    }
     else if (document.contact.phoneNumber.value.length<8)
     {
		alert('verifier votre numero de telephone!!!');
		document.contact.phoneNumber.focus();
		
    }
    
else
{
    alert('Hi !! ' +' ' +document.contact.name.value +' '+ 'vous avez reserver : \n' +'  ' +document.contact.
    moyen[document.contact.moyen.selectedIndex].value+' '+' à' +' '+ document.contact.date.value +' : ' +' '+document.contact.time.value+
    ' \nMerci pour votre confiance !!');
}
   
}
function contact(){
    if (document.f2.nom.value.length<3)
    {
		alert('le nom doit être 3 caractères au moins !!');
		document.f2.nom.focus();
		
    }
    else if   (document.f2.prenom.value.length<3)
    {
		alert('le prenom doit être 3 caractères au moins !!');
		document.f2.prenom.focus();
		
    }
    else if (document.f2.tel.value.length==8)
     {
		alert('verifier votre numero de telephone!!!');
		document.f2.tel.focus();
		
    }
    else {
        alert('HI !! ' +' '+document.f2.prenom.value +' '+document.f2.nom.value+'  '+'\n' +'nous vousrepondons le plus tot possible !!');
    }

}
function clientabonner()
{
    if (document.abonnementClient.nom.value.length<3){
		alert('le nom doit être 3 caractères au moins !!');
		document.abonnementClient.nom.focus();
		
    }
    else if (document.abonnementClient.prenom.value.length<3){
		alert('le nom doit être 3 caractères au moins !!');
		document.abonnementClient.prenom.focus();
		
    }
     else if (document.abonnementClient.tel.value.length<8) {
		alert('verifier votre numero de telephone!!!');
		document.abonnementClient.tel.focus();
		
    }
    else 
    {
    alert('Hi !! ' +' ' +document.abonnementClient.prenom.value +document.abonnementClient.nom.value +' '+ ' \n vous avez  un abonnement   : ' +'  ' +document.abonnementClient.
    moyen[document.abonnementClient.moyen.selectedIndex].value+' '+' par ' +' '+document.abonnementClient.abonnement[document.abonnementClient.abonnement.selectedIndex].value +
    ' \nMerci pour votre confiance !!');
}
    


}

function partenaire(){
    if (document.abonnementPar.nom.value.length<3)
    {
		alert('le nom doit être 3 caractères au moins !!');
		document.abonnementPar.nom.focus();
		
    }
    else if (document.abonnementPar.prenom.value.length<3)
    {
		alert('le nom doit être 3 caractères au moins !!');
		document.abonnementClient.prenom.focus();
		
    }
     else if (document.abonnementPar.tel.value.length<8)
     {
		alert('verifier votre numero de telephone!!!');
		document.abonnementClient.tel.focus();
		
    }
    else {
        aler('Hi !! ' +' ' +document.abonnementPar.prenom.value +document.abonnementPar.nom.value +' '+ '\n vous etes notre partenaire \n' +' au moyen: ' 
        + ' '+ document.abonnementPar.moyen[document.abonnementPar.moyen.selectedIndex].value)+ ' ' + 'pendant '+ ' '+document.abonnementPar.abonnement[document.abonnementPar.abonnement.selectedIndex].value  ;
    }


}
function enquetec(){
    alert('Hi !!'+ ' '+ document.enquete.prenom.value +document.enquete.nom.value +'\n votre reponse a été envoyé avec succés');
}