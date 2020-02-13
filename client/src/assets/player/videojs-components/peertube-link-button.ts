import { buildVideoLink } from '../utils'
import videojs, { VideoJsPlayer } from 'video.js'

const Button = videojs.getComponent('Button')
class PeerTubeLinkButton extends Button {

  constructor (player: VideoJsPlayer, options?: videojs.ComponentOptions) {
    super(player, options)
  }

  createEl () {
    return this.buildElement()
  }

  updateHref () {
    this.el().setAttribute('href', buildVideoLink({ startTime: this.player().currentTime() }))
  }

  handleClick () {
    this.player().pause()
  }

  private buildElement () {
    const el = videojs.dom.createEl('a', {
      href: buildVideoLink(),
      innerHTML: 'BitTube',
      title: this.player().localize('Go to the video page'),
      className: 'vjs-peertube-link',
      target: '_blank'
    })

    el.addEventListener('mouseenter', () => this.updateHref())

    return el as HTMLButtonElement
  }
}

videojs.registerComponent('PeerTubeLinkButton', PeerTubeLinkButton)
