import psutil,time,logging;logging.basicConfig(level=logging.INFO);logger=logging.getLogger(__name__)
while True:logger.info(f"CPU:{psutil.cpu_percent()}% MEM:{psutil.virtual_memory().percent}%");time.sleep(30)
