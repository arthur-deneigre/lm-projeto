package br.com.sesi.app;

import br.com.sesi.model.Musica;
import br.com.sesi.model.Podcast;

public class Main {

	public static void main(String[] args) {
		
		//musica
		
		Musica imprimirMusica = new Musica();
		
		imprimirMusica.setTitulo("Void");
		imprimirMusica.setDuracao("5 minutos");
		imprimirMusica.setTotalDeReproducao(20);
		imprimirMusica.setCurtidas(12000000);
		imprimirMusica.setClassificacao(2);
		
		imprimirMusica.curtir();
		imprimirMusica.reproduzir();
		imprimirMusica.imprimirMusica();
		
		System.out.println("===================================================================");
		
		//----------------------------------------------------------------------------------------------------//
		
		//podcast
		
		Podcast imprimirPodcast = new Podcast();
		
		imprimirPodcast.setTitulo("ronaldinho gaucho - historia");
		imprimirPodcast.setDuracao("25 minutos");
		imprimirPodcast.setTotalDeReproducao(1);
		imprimirPodcast.setCurtidas(2300);
		imprimirPodcast.setClassificacao(1);
		
		imprimirPodcast.curti();
		imprimirPodcast.reproduzi();
		imprimirPodcast.imprimirPodcast();
		 
	}


}
