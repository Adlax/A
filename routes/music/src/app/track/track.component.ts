ngOnInit(): void {
  this.spotify
    .getTrack(this.id)
    .subscribe( (res: any) => this.renderTrack(res) )
}
