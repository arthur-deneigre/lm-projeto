package br.com.sesi.model;

public class Home {
	
	private String titulo;
	
	private String duracao;
	
	private int totalDeReproducao;
	
	private int curtidas;
	
	private int classificacao;

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getDuracao() {
		return duracao;
	}

	public void setDuracao(String duracao) {
		this.duracao = duracao;
	}

	public int getTotalDeReproducao() {
		return totalDeReproducao;
	}

	public void setTotalDeReproducao(int totalDeReproducao) {
		this.totalDeReproducao = totalDeReproducao;
	}

	public int getCurtidas() {
		return curtidas;
	}

	public void setCurtidas(int curtidas) {
		this.curtidas = curtidas;
	}

	public int getClassificacao() {
		return classificacao;
	}

	public void setClassificacao(int classificacao) {
		this.classificacao = classificacao;
	}
			
	public void imprimirMusica() {
		
		System.out.println("Titulo: " + titulo);
		System.out.println("Duracao: " + duracao);
		System.out.println("Reprodução: " + totalDeReproducao);
		System.out.println("Curtidas: " + curtidas);
		System.out.println("Classificação: " + classificacao);
		
	}
	
	
	public void curtir() {
		
		
		if (curtidas <= 4000) {
			System.out.println("Você não curtiu esta musica");
			
		} else {
			System.out.println("Você curtiu esta musica");

		}
	
	}
	
	
	public void reproduzir() {
		
		if (totalDeReproducao <= 4000) {
			System.out.println("Você não reproduziu esta musica");
			
		} else {
			System.out.println("Você reproduziu esta musica");
			
		} 
		
	}
	


	

}
