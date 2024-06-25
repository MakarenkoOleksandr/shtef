from django.db import models


class Navigation(models.Model):
    id = models.AutoField(primary_key=True)
    ua = models.CharField(max_length=200)
    pl = models.CharField(max_length=200)

    class Meta:
        db_table = 'navigation'
        managed = False

    def __str__(self):
        return self.ua
