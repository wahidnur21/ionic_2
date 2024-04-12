<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <ion-button @click="back">
                <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
        </ion-button>
            </ion-buttons>        
        <ion-title>Scanner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Scanner</ion-title>
        </ion-toolbar>
      </ion-header>

      <qrcode-stream @detect="onDetect" :track="paintBoundingBox"
        :formats="['qr_code', 'code_128', 'upc_a', 'ean_13']">
      </qrcode-stream>

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import { useRouter } from "vue-router";
import { arrowBackOutline, save } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}

const onDetect = (data:any) => {
    console.log(data[0].rawValue)

}

// Trackling Function // pilih salah satu

function paintOutline(detectedCodes:any, ctx:any) {
    for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

        ctx.strokeStyle = 'red'

        ctx.beginPath()
        ctx.moveTo(firstPoint.x, firstPoint.y)
        for(const { x, y } of otherPoints) {
          ctx.lineTo(x, y)
        }
        ctx.lineTo(firstPoint.x, firstPoint.y)
        ctx.closePath()
        ctx.stroke()        
    }
}

function paintBoundingBox(detectedCodes: any, ctx:any) {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height }
    } = detectedCode

    ctx.lineWidth = 2
    ctx.strokeStyle = '#007bff'
    ctx.strokeRect(x, y, width, height)

  }
}

function paintCenterText(detectedCodes:any, ctx:any) {
  for (const detectedCode of detectedCodes) {
    const { boundingBox, rawValue } = detectedCode

    const centerX = boundingBox.x + boundingBox.width / 2
    const centerY = boundingBox.y + boundingBox.height / 2

    const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width)

    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.textAlign = 'center'

    ctx.lineWidth = 3
    ctx.strokeStyle = '#35495e'
    ctx.strokeText(detectedCode.rawValue, centerX, centerY)

    ctx.fillStyle = '#5cb984'
    ctx.fillText(rawValue, centerX, centerY)

  }
}
</script>
