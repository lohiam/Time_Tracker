package com.allianz.model;

public class Employee {
	 
	private String email;
	private String entrydate;
	private String entrytime;
	private String exitdate;
	private String exittime;
	
	public Employee(){}

	
	public Employee(String email, String entrydate, String entrytime, String exitdate, String exittime) {
		this.email = email;
		this.entrydate = entrydate;
		this.entrytime = entrytime;
		this.exitdate = exitdate;
		this.exittime = exittime;
	}
	
	


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getEntrydate() {
		return entrydate;
	}


	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}


	public String getEntrytime() {
		return entrytime;
	}


	public void setEntrytime(String entrytime) {
		this.entrytime = entrytime;
	}


	public String getExitdate() {
		return exitdate;
	}


	public void setExitdate(String exitdate) {
		this.exitdate = exitdate;
	}


	public String getExittime() {
		return exittime;
	}


	public void setExittime(String exittime) {
		this.exittime = exittime;
	}


	@Override
	public String toString() {
		return "Employee[Email=" + email + ", EntryDate=" + entrydate+ ", EntryTime=" + entrytime + ", exitDate=" + exitdate +", exitTime="+ exittime +"]";
	}
 
}